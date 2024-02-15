export enum LevelType {
  ROWS = 'rows',
  COLS = 'cols',
  MINES = 'mines',
  LIGHT = '8 x 8, 10 mine',
  MEDIUM = '16 x 16, 40 mine',
  HARD = '32 x 16, 100 mine',
}

export enum Levels {
  CUSTOM = 0,
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
};

export enum Mines {
  FIRST = 10,
  SECOND = 40,
  THIRD = 100,
}

export enum Rows {
  FIRST = 8,
  SECOND = 16,
  THIRD = 32,
}

export enum Cols {
  FIRST = 8,
  SECOND = 16,
  THIRD = 16,
}

export type ValueType = string | number;

export type CellType = {
  value: ValueType;
  x: number;
  y: number;
  opened: boolean;
  flagged: boolean;
};
