const admin = require('firebase-admin');

admin.initializeApp();

// const { changeMessageStatus } = require('./changeMessageStatus');
const { changeStatusAndLastMessage } = require('./changeStatusAndLastMessage');
const { sendNotification } = require('./sendNotifications');

// exports.changeMessageStatus = changeMessageStatus;
exports.changeStatusAndLastMessage = changeStatusAndLastMessage;
exports.sendNotification = sendNotification;
