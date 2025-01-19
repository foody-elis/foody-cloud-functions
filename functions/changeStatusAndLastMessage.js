const functions = require("firebase-functions");
const admin = require("firebase-admin");

const db = admin.firestore();

exports.changeStatusAndLastMessage = functions.firestore
    .onDocumentWritten({document: 'rooms/{roomId}/messages/{messageId}'}, async (event) => {
        const message = event.data.after.data();

        if (message) {
            if (!['delivered', 'seen', 'sent'].includes(message.status)) {
                await event.data.after.ref.update({
                    status: 'delivered',
                });
            }

            const updatedMessage = (await event.data.after.ref.get()).data();

            await db.doc(`rooms/${event.params.roomId}`).update({
                lastMessages: [updatedMessage],
            });
        }
    });
