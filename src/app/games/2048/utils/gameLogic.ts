import { Direction, Board } from "../page";

// 初始化游戏面板
export function initializeBoard(): Board {
  const board = Array(4).fill(null).map(() => Array(4).fill(0));
  addRandomTile(board);
  addRandomTile(board);
  return board;
}

// 添加随机数字
function addRandomTile(board: Board): void {
  const emptyCells: [number, number][] = [];
  board.forEach((row, i) => {
    row.forEach((cell, j) => {
      if (cell === 0) {
        emptyCells.push([i, j]);
      }
    });
  });

  if (emptyCells.length > 0) {
    const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[row][col] = Math.random() < 0.9 ? 2 : 4;
  }
}

// 移动和合并
export function moveBoard(board: Board, direction: Direction): {
  newBoard: Board;
  points: number;
  merged: boolean;
} {
  let newBoard = board.map(row => [...row]);
  let points = 0;
  let merged = false;

  // 移动一行并合并相同数字
  const moveLine = (line: number[]): number[] => {
    // 过滤掉零
    let numbers = line.filter(num => num !== 0);
    
    // 合并相同的数字
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] === numbers[i + 1]) {
        numbers[i] *= 2;
        points += numbers[i];
        numbers.splice(i + 1, 1);
        merged = true;
      }
    }
    
    // 补充零
    while (numbers.length < 4) {
      numbers.push(0);
    }
    
    return numbers;
  };

  const moveLines = (board: number[][]): void => {
    for (let i = 0; i < 4; i++) {
      const newLine = moveLine(board[i]);
      if (newLine.some((num, j) => num !== board[i][j])) {
        merged = true;
      }
      board[i] = newLine;
    }
  };

  // 旋转矩阵
  const rotateMatrix = (matrix: number[][]): number[][] => {
    const N = matrix.length;
    const result = Array(N).fill(0).map(() => Array(N).fill(0));
    
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        result[j][N - 1 - i] = matrix[i][j];
      }
    }
    
    return result;
  };

  // 根据方向处理
  switch (direction) {
    case "left":
      moveLines(newBoard);
      break;
      
    case "right":
      // 反转每一行，移动，再反转回来
      newBoard = newBoard.map(row => row.reverse());
      moveLines(newBoard);
      newBoard = newBoard.map(row => row.reverse());
      break;
      
    case "up":
      // 逆时针旋转，移动，再顺时针旋转回来
      for (let i = 0; i < 3; i++) {
        newBoard = rotateMatrix(newBoard);
      }
      moveLines(newBoard);
      newBoard = rotateMatrix(newBoard);
      break;
      
    case "down":
      // 顺时针旋转，移动，再逆时针旋转回来
      newBoard = rotateMatrix(newBoard);
      moveLines(newBoard);
      for (let i = 0; i < 3; i++) {
        newBoard = rotateMatrix(newBoard);
      }
      break;
  }

  if (merged) {
    addRandomTile(newBoard);
  }

  return { newBoard, points, merged };
}

// 检查是否还能移动
export function canMove(board: Board): boolean {
  // 检查是否有空格
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (board[i][j] === 0) return true;
    }
  }

  // 检查是否有相邻的相同数字
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const current = board[i][j];
      // 检查右侧
      if (j < 3 && current === board[i][j + 1]) return true;
      // 检查下方
      if (i < 3 && current === board[i + 1][j]) return true;
    }
  }

  return false;
}
