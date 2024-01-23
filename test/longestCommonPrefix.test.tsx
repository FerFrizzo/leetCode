import { longestCommonPrefix} from '../src/longestCommonPrefix'

describe("Longest Common Prefix", () => {
    it("should return fl when flower, flow and flight are inputed", () => {
        const result = longestCommonPrefix(["flower", "flow", "flight"]);
        expect(result).toBe("fl");
    });

    it("should return empty string if there is no common prefix", () => {
        const result = longestCommonPrefix(["dog", "racecar", "car"]);
        expect(result).toBe("");
    })
});