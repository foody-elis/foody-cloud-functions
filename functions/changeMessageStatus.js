const functions = require("firebase-functions");

exports.changeMessageStatus = functions.firestore
    .onDocumentCreated({document: 'rooms/{roomId}/messages/{messageId}'}, async (event) => {
        const message = event.data.data();

        if (message) {
            if (['delivered', 'seen', 'sent'].includes(message.status)) {
                return null;
            } else {
                await event.data.ref.update({
                    status: 'delivered',
                });
            }
        }
    });
