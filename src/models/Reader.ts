import { Copy } from "./Copy";

/**
 * Читач бібліотеки з унікальним id, ім'ям та списком позичених копій.
 */
export class Reader {
  private static _nextId = 1;

  private readonly _id: number;
  private readonly _name: string;
  private readonly _borrowedCopies: Copy[] = [];

  constructor(name: string) {
    this._id = Reader._nextId++;
    this._name = name;
  }

  public get id(): number {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get borrowedCopies(): Copy[] {
    return [...this._borrowedCopies];
  }

  public addBorrowedCopy(copy: Copy): void {
    if (!this._borrowedCopies.includes(copy)) {
      this._borrowedCopies.push(copy);
    }
  }

  public removeBorrowedCopy(copy: Copy): void {
    const idx = this._borrowedCopies.indexOf(copy);
    if (idx !== -1) {
      this._borrowedCopies.splice(idx, 1);
    }
  }
}
