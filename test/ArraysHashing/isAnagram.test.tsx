import { isAnagram } from "../../src/ArraysHashing/isAnagram";

describe("Is Anagram", () => {
  it("should return true for this strings", () => {
    const result = isAnagram('anagram', 'nagaram');
    expect(result).toBe(true);
  });

  it("should return empty array for ''", () => {
    const result = isAnagram('rat', 'car');
    expect(result).toBe(false);
  });

})
