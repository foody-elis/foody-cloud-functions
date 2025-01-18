const admin = require('firebase-admin');

admin.initializeApp();

const { changeMessageStatus } = require('./changeMessageStatus');
const { changeLastMessage } = require('./changeLastMessage');
const { sendNotification } = require('./sendNotifications');

exports.changeMessageStatus = changeMessageStatus;
exports.changeLastMessage = changeLastMessage;
exports.sendNotification = sendNotification;
