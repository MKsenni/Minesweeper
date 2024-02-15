import { FieldType } from '@/components/field/field';

export const openNullCell = (
  row: number,
  col: number,
  field: FieldType,
  isOpen: boolean
) => {
  if (row < 0 || col < 0 || row >= field.length || col >= field[0].length) {
    return;
  }

  if (field[row][col].opened) {
    return;
  }

  field[row][col].opened = isOpen;

  if (field[row][col].value === 0) {
    openNullCell(row - 1, col, field, isOpen); // Верхняя ячейка
    openNullCell(row + 1, col, field, isOpen); // Нижняя ячейка
    openNullCell(row, col - 1, field, isOpen); // Левая ячейка
    openNullCell(row, col + 1, field, isOpen); // Правая ячейка
    openNullCell(row - 1, col - 1, field, isOpen); // Вверх слева
    openNullCell(row - 1, col + 1, field, isOpen); // Вверх справа
    openNullCell(row + 1, col - 1, field, isOpen); // Вниз слева
    openNullCell(row + 1, col + 1, field, isOpen); // Вниз справа
  }
};
