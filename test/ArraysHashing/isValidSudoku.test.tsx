import { isLineValid, isValidSudoku } from "../../src/ArraysHashing/isValidSudoku";

describe("Is Valid Sudoku", () => {
  it("should return true for this board", () => {
    const board = [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
    const result = isValidSudoku(board);
    expect(result).toBe(true);
  });

  it("should return false for this board - first column with duplicates", () => {
    const board = [
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
    const result = isValidSudoku(board);
    expect(result).toBe(false);
  });

  it("should return false for this board - first small box with duplicates", () => {
    const board = [
      ["8", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "1"],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["2", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]
    const result = isValidSudoku(board);
    expect(result).toBe(false);
  });
});

describe('Is Line Valid', () => {
  it('should return true for this line', () => {
    const line = ["6", ".", ".", "1", "9", "5", ".", ".", "."]
    expect(isLineValid(line)).toBe(true)
  })

  it('should return false for this line', () => {
    const line = ["6", ".", ".", "1", "9", "5", ".", "6", "."]
    expect(isLineValid(line)).toBe(false)
  })
})