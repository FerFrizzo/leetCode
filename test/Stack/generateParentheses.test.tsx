import { generateParenthesis } from "../../src/Stack/generateParentheses";

describe("Generate Parentheses", () => {
  it("should return all combinations for 3 parentheses", () => {
    const result = generateParenthesis(3);
    expect(result).toEqual(expect.arrayContaining(['()()()', '()(())', '(())()', '(()())', '((()))']));
  })

  it("should return a single parenthesis for 1 combination", () => {
    const result = generateParenthesis(1);
    expect(result).toEqual(expect.arrayContaining(['()']))
  })

});