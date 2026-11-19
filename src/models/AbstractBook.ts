import { Author } from "./Author";

/**
 * Абстрактний базовий клас для всіх типів книг.
 * Забороняє пряме створення екземпляра — тільки через нащадків.
 */
export abstract class AbstractBook {
  private readonly _title: string;
  private readonly _year: number;
  private readonly _author: Author;

  protected constructor(title: string, year: number, author: Author) {
    // Заборона прямого інстанціювання AbstractBook.
    // new.target вказує на конструктор, з якого був викликаний new.
    if (new.target === AbstractBook) {
      throw new Error(
        "Неможливо створити екземпляр абстрактного класу AbstractBook. Використайте Book або EBook."
      );
    }
    this._title = title;
    this._year = year;
    this._author = author;
  }

  public get title(): string {
    return this._title;
  }

  public get year(): number {
    return this._year;
  }

  public get author(): Author {
    return this._author;
  }

  /**
   * Поліморфний метод — кожен нащадок повертає власний опис.
   */
  public abstract getDescription(): string;
}
