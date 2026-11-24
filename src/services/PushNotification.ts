import {User} from "../models/User";
import {INotificationChannel, ILogger} from "../core/interfaces";

export class PushNotification implements INotificationChannel {
    private logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    send(user: User, message: string): void {
        this.logger.log(`Sending PUSH to ${user.deviceToken}`);
        console.log(`Push sent to ${user.deviceToken}: ${message}`);
    }
}
