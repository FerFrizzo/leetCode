import { isPalindrome } from "../src/palindromeNumber";

describe("Palindrome Number", () => {
  test("check if 121 is a palindrome", () => {
    const result = isPalindrome(121);
    expect(result).toBe(true);
  });

  test("check if -121 is a palindrome", () => {
    const result = isPalindrome(-121);
    expect(result).toBe(false);
  });

  test("check if 10 is a palindrome", () => {
    const result = isPalindrome(10);
    expect(result).toBe(false);
  });
});