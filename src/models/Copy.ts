import { AbstractBook } from "./AbstractBook";

/**
 * Фізична або логічна копія книги, яку можна видати читачу.
 */
export class Copy {
  private static _nextId = 1;

  private readonly _id: number;
  private readonly _book: AbstractBook;
  private _isAvailable: boolean = true;

  constructor(book: AbstractBook) {
    this._id = Copy._nextId++;
    this._book = book;
  }

  public get id(): number {
    return this._id;
  }

  public get book(): AbstractBook {
    return this._book;
  }

  public get isAvailable(): boolean {
    return this._isAvailable;
  }

  /**
   * Позначає копію як видану. Повертає false, якщо копія вже недоступна.
   */
  public markBorrowed(): boolean {
    if (!this._isAvailable) {
      return false;
    }
    this._isAvailable = false;
    return true;
  }

  /**
   * Позначає копію як повернуту.
   */
  public markReturned(): void {
    this._isAvailable = true;
  }
}
