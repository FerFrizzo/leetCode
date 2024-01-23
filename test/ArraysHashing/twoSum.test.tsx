import { twoSum } from "../../src/ArraysHashing/twoSum";

describe("TwoSum", () => {
    it("should find correctly the sum of 2 items on array that correspond to target", () => {
        const result = twoSum([2, 7, 11, 15], 9);
        expect(result).toStrictEqual([0, 1]);
    });
});

