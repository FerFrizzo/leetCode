import { containsDuplicate } from "../../src/ArraysHashing/containsDuplicate"

describe("Contains Duplicate", () => {
  it("should return true for this array", () => {
    const result = containsDuplicate([1, 2, 3, 1]);
    expect(result).toBe(true);
  });

  it("should return false for this array", () => {
    const result = containsDuplicate([1, 2, 3, 4]);
    expect(result).toBe(false);
  });

  it("should return true for this array", () => {
    const result = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
    expect(result).toBe(true);
  });

});
