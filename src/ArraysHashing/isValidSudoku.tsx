export function isValidSudoku(board: string[][]): boolean {
  for (let col = 0; col < board[0].length; col++) {
    const column: string[] = [];
    for (let row = 0; row < board.length; row++) {
      const line = board[row]
      if (!isLineValid(line)) return false
      column.push(board[row][col]);
    }
    if (!isLineValid(column)) return false
  }

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const smallBoard: string[][] = [];
      for (let row = 0; row < 3; row++) {
        smallBoard.push(board[i + row].slice(j, j + 3));
      }
      if (!isBoxValid(smallBoard)) return false
    }
  }


  return true
}

export function isBoxValid(box: string[][]): boolean {
  const control: Map<number, number> = new Map()
  box = box.map((value) => value.filter((v) => v !== '.'))
  for (const lines of box) {
    for (const item of lines) {
      const nbr = Number(item)
      if (!control.has(nbr)) control.set(nbr, 1)
      else return false
    }
  }
  return true
}

export function isLineValid(line: string[]): boolean {
  const control: Map<number, number> = new Map()
  line = line.filter((value) => value !== '.')
  for (const item of line) {
    const nbr = Number(item)
    if (!control.has(nbr)) control.set(nbr, 1)
    else return false
  }
  return true
}
