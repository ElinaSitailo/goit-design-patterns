import { User } from "../models/User";
import { INotificationChannel, ILogger } from "../core/interfaces";

export class EmailNotification implements INotificationChannel {
    private logger: ILogger;

    constructor(logger: ILogger) {
        this.logger = logger;
    }

    send(user: User, message: string): void {
        this.logger.log(`Sending EMAIL to ${user.email}`);
        console.log(`Email sent to ${user.email}: ${message}`);
    }
}
