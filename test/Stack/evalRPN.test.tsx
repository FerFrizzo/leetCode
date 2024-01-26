import { evalRPN } from "../../src/Stack/evalRPN";

describe("Evaluate Reverse Polish Notation", () => {
  it("should return 9 for tokens ['2','1','+','3','*']", () => {
    const result = evalRPN(['2', '1', '+', '3', '*']);
    expect(result).toBe(9);
  })

  it("should return 6 for these tokens", () => {
    const result = evalRPN(['4', '13', '5', '/', '+']);
    expect(result).toBe(6);
  })

  it("should return 22 for these tokens", () => {
    const result = evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']);
    expect(result).toBe(22);
  })
});