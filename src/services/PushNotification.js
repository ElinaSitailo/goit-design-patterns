"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushNotification = void 0;
class PushNotification {
    constructor(logger) {
        this.logger = logger;
    }
    send(user, message) {
        this.logger.log(`Sending PUSH to ${user.deviceToken}`);
        console.log(`Push sent to ${user.deviceToken}: ${message}`);
    }
}
exports.PushNotification = PushNotification;
