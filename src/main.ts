import { User } from "./models/User";
import { NotificationService } from "./services/NotificationService";
import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";

const user = new User(
    "example@email.com",
    "+380123456789",
    "device-token-abc"
);

const logger = new Logger();
const notificationService = new NotificationService();

notificationService.addChannel(new EmailNotification(logger));
notificationService.addChannel(new SMSNotification(logger));
notificationService.addChannel(new PushNotification(logger));

notificationService.send(user, "Ваш платіж оброблено успішно!");
