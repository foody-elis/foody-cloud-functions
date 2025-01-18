const functions = require("firebase-functions");
const admin = require("firebase-admin");

const db = admin.firestore();

exports.changeLastMessage = functions.firestore
    .onDocumentCreated({document: 'rooms/{roomId}/messages/{messageId}'}, async (event) => {
        const message = event.data.data();

        if (message) {
            await db.doc(`rooms/${event.params.roomId}`).update({
                lastMessages: [message],
            });
        }
    });
