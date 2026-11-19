import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

/**
 * Звичайна (паперова) книга.
 */
export class Book extends AbstractBook {
  constructor(title: string, year: number, author: Author) {
    super(title, year, author);
    // Автоматично реєструємо книгу у автора для двостороннього зв'язку.
    author.addBook(this);
  }

  public getDescription(): string {
    return `Книга «${this.title}» (${this.year}), автор: ${this.author.name}.`;
  }
}
