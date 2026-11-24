import { User } from "../models/User";
import { INotificationChannel, ILogger } from "../core/interfaces";

export class SMSNotification implements INotificationChannel {
    private logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    send(user: User, message: string): void {
        this.logger.log(`Sending SMS to ${user.phone}`);
        console.log(`SMS sent to ${user.phone}: ${message}`);
    }
}
