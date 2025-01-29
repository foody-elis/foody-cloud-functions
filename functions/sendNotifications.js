const functions = require("firebase-functions");
const admin = require("firebase-admin");

const db = admin.firestore();
const messaging = admin.messaging();

exports.sendNotification = functions.firestore
    .onDocumentCreated({document: 'rooms/{roomId}/messages/{messageId}'}, async (event) => {
        const message = event.data.data();

        const room = (await db.collection('rooms').doc(event.params.roomId).get()).data();
        const authorRef = db.collection('users').doc(message.authorId);
        const author = (await authorRef.get()).data();

        const getMessageBody = (type) => {
            let body;
            switch (type) {
                case "text":
                    body = message.text.length <= 100 ? message.text : message.text.substring(0, 97) + '...';
                    break;
                case "image":
                    body = "Immagine";
                    break;
                case "video":
                    body = "Video";
                    break;
                case "file":
                    body = "File";
                    break;
                case "audio":
                    body = "Audio";
                    break;
                default:
                    body = "Messaggio";
            }
            return body;
        };

        const payload = {
            title: `${author.firstName} ${author.lastName}`,
            body: getMessageBody(message.type),
        };

        const recipientId = room.userIds[0] === message.authorId ? room.userIds[1] : room.userIds[0];
        const recipientRef = db.collection('users').doc(recipientId);
        const recipient = (await recipientRef.get()).data();

        if (recipient.metadata != null && recipient.metadata["fcmToken"]) {
            const fcmToken = recipient.metadata["fcmToken"];

            const message = {
                token: fcmToken,
                notification: payload,
                data: {
                    authorImageUrl: author.imageUrl ?? "",
                    roomId: event.params.roomId,
                }
            };

            try {
                const response = await messaging.send(message);
            } catch (error) {
                functions.logger.error('Errore nell\'invio della notifica:', error);

                if (error.code === 'messaging/invalid-registration-token' ||
                    error.code === 'messaging/registration-token-not-registered') {
                    functions.logger.log('Rimuovo il token');

                    await recipientRef.update({metadata: null});
                }
            }
        } else {
            functions.logger.warn('Nessun token FCM trovato per l\'utente:', recipientId);
        }
    });
