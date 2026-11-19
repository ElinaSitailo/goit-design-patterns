import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";
import { Copy } from "./Copy";
import { Reader } from "./Reader";

/**
 * Бібліотека — агрегатор книг, авторів, копій та читачів.
 * Реалізує агрегацію: сутності існують незалежно, але групуються всередині Library.
 */
export class Library {
  private readonly _books: AbstractBook[] = [];
  private readonly _authors: Author[] = [];
  private readonly _copies: Copy[] = [];
  private readonly _readers: Reader[] = [];

  public addBook(book: AbstractBook): void {
    if (!this._books.includes(book)) {
      this._books.push(book);
    }
  }

  public addAuthor(author: Author): void {
    if (!this._authors.includes(author)) {
      this._authors.push(author);
    }
  }

  public addCopy(copy: Copy): void {
    if (!this._copies.includes(copy)) {
      this._copies.push(copy);
    }
  }

  public addReader(reader: Reader): void {
    if (!this._readers.includes(reader)) {
      this._readers.push(reader);
    }
  }

  public get books(): AbstractBook[] {
    return [...this._books];
  }

  public get authors(): Author[] {
    return [...this._authors];
  }

  public get copies(): Copy[] {
    return [...this._copies];
  }

  public get readers(): Reader[] {
    return [...this._readers];
  }

  /**
   * Повертає лише вільні копії.
   */
  public getAvailableCopies(): Copy[] {
    return this._copies.filter((c) => c.isAvailable);
  }

  /**
   * Пошук книг конкретного автора.
   */
  public findBooksByAuthor(author: Author): AbstractBook[] {
    return this._books.filter((b) => b.author === author);
  }
}
