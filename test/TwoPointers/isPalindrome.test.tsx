import { isPalindrome } from "../../src/TwoPointers/isPalindrome";

describe("Valid Palindrome", () => {
  it("should return true for the string given", () => {
    const result = isPalindrome("A man, a plan, a canal: Panama");
    expect(result).toBe(true);
  });

  it("should return false for race a car", () => {
    const result = isPalindrome('race a car');
    expect(result).toBe(false);
  });

  it("should return true for a space", () => {
    const result = isPalindrome(" ");
    expect(result).toBe(true);
  });

  it("should return false for 0P", () => {
    const result = isPalindrome("0P");
    expect(result).toBe(false);
  });


});