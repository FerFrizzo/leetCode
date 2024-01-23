import { productExceptSelf } from "../../src/ArraysHashing/productExceptSelf";

describe("Product Except Self", () => {
  it("should return [24, 12, 8, 6] for the array [1, 2, 3, 4]", () => {
    const result = productExceptSelf([1, 2, 3, 4]);
    expect(result).toBe([24, 12, 8, 6]);
  });

  it("should return [0,0,9,0,0] for the array [-1,1,0,-3,3]", () => {
    const result = productExceptSelf([-1, 1, 0, -3, 3]);
    expect(result).toBe([0, 0, 9, 0, 0]);
  });
});