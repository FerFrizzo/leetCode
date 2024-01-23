import { strStr } from '../src/strStr'

describe("Needle in the haystack", () => {
    
    it("should return index of the string", () => {
        const result = strStr('sadbutsad', 'sad');
        expect(result).toBe(0);
    });

    it("should return -1 when the string doesn't exist", () => {
        const result = strStr('leetcode', 'leeto')
        expect(result).toBe(-1);
    });

});