import { trap } from "../../src/TwoPointers/trap";

describe("Trapping Rain Water", () => {
  it("should return 6 for this array [0,1,0,2,1,0,1,3,2,1,2,1]", () => {
    const result = trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
    expect(result).toBe(6);
  });

  it("should return 9 for this array [4,2,0,3,2,5]", () => {
    const result = trap([4, 2, 0, 3, 2, 5]);
    expect(result).toBe(9);
  });

});