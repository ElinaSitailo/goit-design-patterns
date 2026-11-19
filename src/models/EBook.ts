import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

/**
 * Електронна книга. Наслідує AbstractBook і додає поле url.
 */
export class EBook extends AbstractBook {
  private readonly _url: string;

  constructor(title: string, year: number, author: Author, url: string) {
    super(title, year, author);
    this._url = url;
  }

  public get url(): string {
    return this._url;
  }

  public getDescription(): string {
    return `Електронна книга «${this.title}» (${this.year}), автор: ${this.author.name}. Доступна за URL: ${this._url}`;
  }
}
