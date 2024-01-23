import { threeSum } from "../../src/TwoPointers/threeSum";

describe("Three Sum", () => {
  it("should find ..", () => {
    const result = threeSum([-1, 0, 1, 2, -1, -4]);
    expect(result).toStrictEqual([[-1, -1, 2], [-1, 0, 1]]);
  });
});

