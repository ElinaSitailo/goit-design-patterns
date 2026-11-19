import { AbstractBook } from "./models/AbstractBook";
import { Author } from "./models/Author";
import { Book } from "./models/Book";
import { EBook } from "./models/EBook";
import { Copy } from "./models/Copy";
import { Reader } from "./models/Reader";
import { Library } from "./models/Library";
import { BorrowService } from "./services/BorrowService";

// --- 1. Створюємо автора і книгу ---
const author = new Author("Тарас Шевченко");
const book = new Book("Кобзар", 1840, author);

// --- 2. Створюємо електронну книгу ---
const ebook = new EBook(
  "Гайдамаки",
  1841,
  author,
  "https://example.com/haidamaky.pdf"
);

// --- 3. Створюємо кілька копій однієї книги ---
const copy1 = new Copy(book);
const copy2 = new Copy(book);
const copy3 = new Copy(book);

// --- Наповнюємо бібліотеку (агрегація) ---
const library = new Library();
library.addAuthor(author);
library.addBook(book);
library.addBook(ebook);
library.addCopy(copy1);
library.addCopy(copy2);
library.addCopy(copy3);

// --- 4. Додаємо читача ---
const reader = new Reader("Іван Франко");
library.addReader(reader);

// --- 5. Спроба видати копію читачу ---
const borrowService = new BorrowService();
borrowService.borrow(reader, copy1);

// --- 6. Повторна спроба видати вже зайняту копію — має бути відхилена ---
const secondAttempt = borrowService.borrow(reader, copy1);
console.log(
  `Результат повторної видачі тієї ж копії: ${
    secondAttempt ? "успіх" : "відхилено"
  }`
);

// --- 7. Виклик getDescription() для Book і EBook — має показати різні повідомлення (поліморфізм) ---
console.log("---- getDescription() ----");
console.log(book.getDescription());
console.log(ebook.getDescription());

// Демонстрація поліморфізму через єдиний тип AbstractBook.
const items: AbstractBook[] = [book, ebook];
console.log("---- Поліморфний виклик через AbstractBook[] ----");
for (const item of items) {
  console.log(item.getDescription());
}

// --- Додатково: пошук книг за автором та вільні копії ---
console.log("---- Книги автора ----");
console.log(
  library.findBooksByAuthor(author).map((b) => b.title)
);
console.log("---- Вільні копії ----");
console.log(
  library.getAvailableCopies().map((c) => `#${c.id} — ${c.book.title}`)
);

// --- 8. Спроба створити об'єкт AbstractBook має бути заборонена ---
console.log("---- Спроба інстанціювати AbstractBook ----");
try {
  // На рівні коду це заборонено двома способами:
  //   1. Ключове слово `abstract` — TypeScript не дозволить `new AbstractBook(...)` під час компіляції.
  //   2. Runtime-перевірка `new.target` у конструкторі — кине помилку навіть у чистому JS.
  // Щоб продемонструвати runtime-захист, обходимо статичну перевірку через приведення типу.
  const forbidden = new (AbstractBook as unknown as new (
    title: string,
    year: number,
    author: Author
  ) => AbstractBook)("Заборонено", 2024, author);
  console.log("Це не має вивестись:", forbidden);
} catch (e) {
  console.error(
    "Помилка (як і очікувалось):",
    e instanceof Error ? e.message : e
  );
}
