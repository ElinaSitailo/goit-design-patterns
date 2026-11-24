"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSNotification = void 0;
class SMSNotification {
    constructor(logger) {
        this.logger = logger;
    }
    send(user, message) {
        this.logger.log(`Sending SMS to ${user.phone}`);
        console.log(`SMS sent to ${user.phone}: ${message}`);
    }
}
exports.SMSNotification = SMSNotification;
