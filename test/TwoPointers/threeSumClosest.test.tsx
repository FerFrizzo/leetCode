import { threeSumClosest } from "../../src/TwoPointers/threeSumClosest";

describe("Three Sum Closest", () => {
  it("should find return 2", () => {
    const result = threeSumClosest([-1, 2, 1, -4], 1);
    // -4, -1, 2, 1
    expect(result).toBe(2);
  });

  it("should find return 0", () => {
    const result = threeSumClosest([0, 0, 0], 1);
    expect(result).toBe(0);
  });

});

