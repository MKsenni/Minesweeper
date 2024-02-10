export const createField = (rows: number, cols: number, bombs: number) => {
  let field = new Array(rows).fill(null).map(() => new Array(cols).fill(0));

  let bombsLocation = 0;
  while (bombsLocation < bombs) {
    let randomRow = Math.floor(Math.random() * rows);
    let randomCol = Math.floor(Math.random() * cols);

    if (field[randomRow][randomCol] !== 'X') {
      field[randomRow][randomCol] = 'X';
      bombsLocation += 1;
    }
  }

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      if (field[i][j] !== 'X') {
        let bombCount = 0;
        for (let x = -1; x <= 1; x += 1) {
          for (let y = -1; y <= 1; y += 1) {
            if (i + x >= 0 && i + x < rows && j + y >= 0 && j + y < cols) {
              if (field[i + x][j + y] === 'X') {
                bombCount += 1;
              }
            }
          }
        }
        field[i][j] = bombCount;
      }
    }
  }

  return field;
};
