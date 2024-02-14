import { FieldType } from '@/components/field/field';

export const createField = (rows: number, cols: number, mines: number) => {
  // let field: FieldType = new Array(rows).fill(null).map(() => new Array(cols).fill({value: 0, x: 0, y: 0, opened: false, flagged: false}));
  let field: FieldType = new Array(rows).fill(null).map(() => new Array(cols));

  for (let x = 0; x < rows; x += 1) {
    for (let y = 0; y < cols; y += 1) {
      field[x][y] = {
        value: 0,
        x: x,
        y: y,
        opened: false,
        flagged: false,
      };
    }
  }

  let minesLocation: number[][] = [];

  let minesCount = 0;
  while (minesCount < mines) {
    let randomRow = Math.floor(Math.random() * rows);
    let randomCol = Math.floor(Math.random() * cols);

    if (field[randomRow][randomCol].value !== 'X') {
      field[randomRow][randomCol].value = 'X';
      minesLocation.push([randomRow, randomCol]);
      minesCount += 1;
    }
  }

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (field[i][j].value !== 'X') {
        let bombCount = 0;
        for (let x = -1; x <= 1; x += 1) {
          for (let y = -1; y <= 1; y += 1) {
            if (i + x >= 0 && i + x < rows && j + y >= 0 && j + y < cols) {
              if (field[i + x][j + y].value === 'X') {
                bombCount += 1;
              }
            }
          }
        }
        field[i][j].value = bombCount;
      }
    }
  }

  return { field, minesLocation };
};
