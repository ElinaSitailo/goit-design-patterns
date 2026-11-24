"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationService = void 0;
class NotificationService {
    constructor() {
        this.channels = [];
    }
    addChannel(channel) {
        this.channels.push(channel);
    }
    send(user, message) {
        this.channels.forEach(channel => channel.send(user, message));
    }
}
exports.NotificationService = NotificationService;
