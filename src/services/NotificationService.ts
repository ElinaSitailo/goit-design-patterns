import { User } from "../models/User";
import { INotificationChannel } from "../core/interfaces";

export class NotificationService {
    private channels: INotificationChannel[] = [];

    addChannel(channel: INotificationChannel): void {
        this.channels.push(channel);
    }

    send(user: User, message: string): void {
        this.channels.forEach(channel => channel.send(user, message));
    }
}
