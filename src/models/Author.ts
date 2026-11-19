import type { Book } from "./Book";

/**
 * Автор книг. Зберігає ім'я та список написаних книг.
 */
export class Author {
  private readonly _name: string;
  private readonly _books: Book[] = [];

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  /**
   * Повертає копію масиву книг, щоб уникнути зовнішнього мутування списку.
   */
  public get books(): Book[] {
    return [...this._books];
  }

  public addBook(book: Book): void {
    if (!this._books.includes(book)) {
      this._books.push(book);
    }
  }
}
