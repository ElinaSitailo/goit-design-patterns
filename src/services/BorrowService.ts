import { Copy } from "../models/Copy";
import { Reader } from "../models/Reader";

/**
 * Сервіс для позичання копій книг читачам.
 * Відокремлений від моделей, щоб не змішувати доменну поведінку з даними.
 */
export class BorrowService {
  /**
   * Спроба позичити копію читачу.
   * @returns true — успішно позичено; false — копія вже недоступна.
   */
  public borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.isAvailable) {
      console.warn(
        `[BorrowService] Копія #${copy.id} книги «${copy.book.title}» вже позичена. Читач ${reader.name} не може її взяти.`
      );
      return false;
    }

    const ok = copy.markBorrowed();
    if (!ok) {
      return false;
    }

    reader.addBorrowedCopy(copy);
    console.log(
      `[BorrowService] Копію #${copy.id} книги «${copy.book.title}» видано читачу ${reader.name} (id=${reader.id}).`
    );
    return true;
  }

  /**
   * Повернення копії читачем.
   */
  public returnCopy(reader: Reader, copy: Copy): void {
    copy.markReturned();
    reader.removeBorrowedCopy(copy);
    console.log(
      `[BorrowService] Читач ${reader.name} повернув копію #${copy.id} книги «${copy.book.title}».`
    );
  }
}
