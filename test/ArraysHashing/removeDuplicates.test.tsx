import { removeDuplicates } from '../../src/ArraysHashing/removeDuplicates'

describe("Remove Duplicates", () => {

    it("should return 1 for this array", () => {
        const result = removeDuplicates([1, 1, 2]);
        expect(result).toBe(2);
    });

    it("should return empty string if there is no common prefix", () => {
        const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
        expect(result).toBe(5);
    });

});