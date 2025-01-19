const admin = require('firebase-admin');

admin.initializeApp();

const { changeStatusAndLastMessage } = require('./changeStatusAndLastMessage');
const { sendNotification } = require('./sendNotifications');

exports.changeStatusAndLastMessage = changeStatusAndLastMessage;
exports.sendNotification = sendNotification;
