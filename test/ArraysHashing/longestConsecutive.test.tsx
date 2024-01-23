import { longestConsecutive } from "../../src/ArraysHashing/longestConsecutive";

describe("Longest Consecutive Sequence", () => {
  it("should return 4 for this array", () => {
    const result = longestConsecutive([100, 4, 200, 1, 3, 2]);
    expect(result).toBe(4);
  });

  it("should return 9 for the array [-1,1,0,-3,3]", () => {
    const result = longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
    expect(result).toBe(9);
  });
});