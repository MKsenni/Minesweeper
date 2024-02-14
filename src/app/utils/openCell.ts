import { CellType } from "@/components/cell";
import { FieldType } from "@/components/field/field";

// export const openCell = (field: CellType[][], row: number, col: number) => {
//   const queue: CellType[] = [{ x: row, y: col, value: field[row][col].value, opened: true, flagged: field[row][col].flagged }];

//   while (queue.length > 0) {
//     const cell = queue.shift()!;
//     const { x, y } = cell;

//     for (let i = -1; i <= 1; i++) {
//       for (let j = -1; j <= 1; j++) {
//         const newRow = x + i;
//         const newCol = y + j;

//         if (newRow >= 0 && newRow < field.length && newCol >= 0 && newCol < field[0].length) {
//           const neighbor = field[newRow][newCol];
//           if (!neighbor.opened) {
//             field[newRow][newCol].opened = true;
//             if (neighbor.value === 0) {
//               queue.push({ x: newRow, y: newCol, value: neighbor.value, opened: true, flagged: neighbor.flagged });
//             }
//           }
//         }
//       }
//     }
//   }
// };

export const openCell = (
  field: FieldType,
  x: number,
  y: number
) => {
  let show = [];
  show.push(field[x][y]);

  // for(let i = show.length - 1; i > 0; i -= 1) {
  //   const cell: CellType = show[i];
  //   const row = cell.x;
  //   const col = cell.y;
  //   if (!cell.opened) {
  //     cell.opened = true;
  //   }
  //   if (cell.value !== 0) {
  //     break;
  //   }
  //   // верх слева
  //   if (
  //     row > 0 &&
  //     col > 0 &&
  //     field[row - 1][col - 1].value === 0 &&
  //     !field[row - 1][col - 1].opened
  //   ) {
  //     show.push(field[row - 1][col - 1]);
  //   }

  //   // низ справа
  //   if (
  //     row < field.length - 1 &&
  //     col < field[0].length - 1 &&
  //     field[row + 1][col + 1].value === 0 &&
  //     !field[row + 1][col + 1].opened
  //   ) {
  //     show.push(field[row + 1][col + 1]);
  //   }

  //   // верх справа
  //   if (
  //     row > 0 &&
  //     col < field[0].length - 1 &&
  //     field[row - 1][col + 1].value === 0 &&
  //     !field[row - 1][col + 1].opened
  //   ) {
  //     show.push(field[row - 1][col + 1]);
  //   }

  //   // низ слева
  //   if (
  //     row < field.length - 1 &&
  //     col > 0 &&
  //     field[row + 1][col - 1].value === 0 &&
  //     !field[row + 1][col - 1].opened
  //   ) {
  //     show.push(field[row + 1][col - 1]);
  //   }

  //   // верх
  //   if (row > 0 && field[row - 1][col].value === 0 && !field[row - 1][col].opened) {
  //     show.push(field[row - 1][col]);
  //   }

  //   // справа
  //   if (
  //     col < field[0].length - 1 &&
  //     field[row][col + 1].value === 0 &&
  //     !field[row][col + 1].opened
  //   ) {
  //     show.push(field[row][col + 1]);
  //   }

  //   // низ
  //   if (
  //     row < field.length - 1 &&
  //     field[row + 1][col].value === 0 &&
  //     !field[row + 1][col].opened
  //   ) {
  //     show.push(field[row + 1][col]);
  //   }

  //   // слева
  //   if (col > 0 && field[row][col - 1].value === 0 && !field[row][col - 1].opened) {
  //     show.push(field[row][col - 1]);
  //   }

  //   // начинаем раскрывать ячейки

  //   //верх слева
  //   if (row > 0 && col > 0 && !field[row - 1][col - 1].opened) {
  //     field[row - 1][col - 1].opened = true;
  //   }

  //   // слева
  //   if (col > 0 && !field[row][col - 1].opened) {
  //     field[row][col - 1].opened = true;
  //   }

  //   //низ слева
  //   if (row < field.length - 1 && col > 0 && !field[row + 1][col - 1].opened) {
  //     field[row + 1][col - 1].opened = true;
  //   }

  //   //верх
  //   if (row > 0 && !field[row - 1][col].opened) {
  //     field[row - 1][col].opened = true;
  //   }

  //   // низ
  //   if (row < field.length - 1 && !field[row + 1][col].opened) {
  //     field[row + 1][col].opened = true;
  //   }

  //   // верх справа
  //   if (row > 0 && col < field[0].length - 1 && !field[row - 1][col + 1].opened) {
  //     field[row - 1][col + 1].opened = true;
  //   }

  //   //справа
  //   if (col < field[0].length - 1 && !field[row][col + 1].opened) {
  //     field[row][col + 1].opened = true;
  //   }

  //   // низ справа
  //   if (
  //     row < field.length - 1 &&
  //     col < field[0].length - 1 &&
  //     !field[row + 1][col + 1].opened
  //   ) {
  //     field[row + 1][col + 1].opened = true;
  //   }
  // }

  while (show.length > 0) {
    const cell: CellType = show.pop()!;
    const row = cell.x;
    const col = cell.y;
    if (!cell.opened) {
      
      cell.opened = true;
    }
    if (cell.value !== 0) {
      break;
    }
    // верх слева
    if (
      row > 0 &&
      col > 0 &&
      field[row - 1][col - 1].value === 0 &&
      !field[row - 1][col - 1].opened
    ) {
      show.push(field[row - 1][col - 1]);
    }

    // низ справа
    if (
      row < field.length - 1 &&
      col < field[0].length - 1 &&
      field[row + 1][col + 1].value === 0 &&
      !field[row + 1][col + 1].opened
    ) {
      show.push(field[row + 1][col + 1]);
    }

    // верх справа
    if (
      row > 0 &&
      col < field[0].length - 1 &&
      field[row - 1][col + 1].value === 0 &&
      !field[row - 1][col + 1].opened
    ) {
      show.push(field[row - 1][col + 1]);
    }

    // низ слева
    if (
      row < field.length - 1 &&
      col > 0 &&
      field[row + 1][col - 1].value === 0 &&
      !field[row + 1][col - 1].opened
    ) {
      show.push(field[row + 1][col - 1]);
    }

    // верх
    if (row > 0 && field[row - 1][col].value === 0 && !field[row - 1][col].opened) {
      show.push(field[row - 1][col]);
    }

    // справа
    if (
      col < field[0].length - 1 &&
      field[row][col + 1].value === 0 &&
      !field[row][col + 1].opened
    ) {
      show.push(field[row][col + 1]);
    }

    // низ
    if (
      row < field.length - 1 &&
      field[row + 1][col].value === 0 &&
      !field[row + 1][col].opened
    ) {
      show.push(field[row + 1][col]);
    }

    // слева
    if (col > 0 && field[row][col - 1].value === 0 && !field[row][col - 1].opened) {
      show.push(field[row][col - 1]);
    }

    // начинаем раскрывать ячейки

    //верх слева
    if (row > 0 && col > 0 && !field[row - 1][col - 1].opened) {
      field[row - 1][col - 1].opened = true;
    }

    // слева
    if (col > 0 && !field[row][col - 1].opened) {
      field[row][col - 1].opened = true;
    }

    //низ слева
    if (row < field.length - 1 && col > 0 && !field[row + 1][col - 1].opened) {
      field[row + 1][col - 1].opened = true;
    }

    //верх
    if (row > 0 && !field[row - 1][col].opened) {
      field[row - 1][col].opened = true;
    }

    // низ
    if (row < field.length - 1 && !field[row + 1][col].opened) {
      field[row + 1][col].opened = true;
    }

    // верх справа
    if (row > 0 && col < field[0].length - 1 && !field[row - 1][col + 1].opened) {
      field[row - 1][col + 1].opened = true;
    }

    //справа
    if (col < field[0].length - 1 && !field[row][col + 1].opened) {
      field[row][col + 1].opened = true;
    }

    // низ справа
    if (
      row < field.length - 1 &&
      col < field[0].length - 1 &&
      !field[row + 1][col + 1].opened
    ) {
      field[row + 1][col + 1].opened = true;
    }
  }

  return field;
};
