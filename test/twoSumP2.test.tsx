import { twoSumP2 } from "../src/twoSumP2";

describe("Two Sum II", () => {
  it("should return the (index + 1) of the two numbers that adds to the target", () => {
    const result = twoSumP2([2, 7, 11, 15], 9);
    expect(result).toStrictEqual([1, 2]);
  });

  it("should return 1 and 3 for target 6", () => {
    const result = twoSumP2([2, 3, 4], 6);
    expect(result).toStrictEqual([1, 3]);
  });

  it("should return 1, 2 for target -1", () => {
    const result = twoSumP2([-1, 0], -1);
    expect(result).toStrictEqual([1, 2]);
  });

  it("should return 4, 5 for target 8", () => {
    const result = twoSumP2([1, 2, 3, 4, 4, 9, 56, 90], 8);
    expect(result).toStrictEqual([4, 5]);
  });
});

