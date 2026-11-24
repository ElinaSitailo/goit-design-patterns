"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotification = void 0;
class EmailNotification {
    constructor(logger) {
        this.logger = logger;
    }
    send(user, message) {
        this.logger.log(`Sending EMAIL to ${user.email}`);
        console.log(`Email sent to ${user.email}: ${message}`);
    }
}
exports.EmailNotification = EmailNotification;
