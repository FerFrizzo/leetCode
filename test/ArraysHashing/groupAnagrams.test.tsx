import { groupAnagrams } from "../../src/ArraysHashing/groupAnagrams";

describe("Group Anagram", () => {
  it("should return ...", () => {
    const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    expect(result).toContainEqual([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
  });

  it("should return ...", () => {
    const result = groupAnagrams(['']);
    expect(result).toContain([['']]);
  });

  it("should return ...", () => {
    const result = groupAnagrams(['a']);
    expect(result).toContainEqual([['a']]);
  });

});
