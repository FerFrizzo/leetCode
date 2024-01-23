import { letterCombinations } from "../src/letterCombinations";

describe("Letter Combination of a Phone Number", () => {
  it("should return all combinations for 23", () => {
    const result = letterCombinations('23');
    expect(result.length).toBe(9);
  });

  it("should return empty array for ''", () => {
    const result = letterCombinations('');
    expect(result).toBe([]);
  });

  it("should return a b and c for 2", () => {
    const result = letterCombinations('2');
    expect(result).toBe(['a', 'b', 'b']);
  });

});

