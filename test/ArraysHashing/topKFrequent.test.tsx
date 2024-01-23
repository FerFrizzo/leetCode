import { topKFrequent } from "../../src/ArraysHashing/topKFrequent";

describe("Top k Frequent", () => {
  it("should return [1, 2] for the given array when k = 2", () => {
    const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
    expect(result).toBe([1, 2]);
  });

  it("should return [1] for an array of [1] and k = 1", () => {
    const result = topKFrequent([1], 1);
    expect(result).toBe([1]);
  });

  it("should return [1] for an array of [1] and k = 1", () => {
    const result = topKFrequent([4, 1, -1, 2, -1, 2, 3], 2);
    expect(result).toBe([2, -1]);
  });


});
