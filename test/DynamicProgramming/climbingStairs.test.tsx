import { climbStairs } from '../../src/DynamicProgramming/climbingStairs'

describe('Add Binary', () => {
  it("should respond 2 when 2", () => {
    const result = climbStairs(2);
    expect(result).toBe(2);
  });

  it("should respond 3 when 3", () => {
    const result = climbStairs(3);
    expect(result).toBe(3);
  });

  it("should respond 5 when 8", () => {
    const result = climbStairs(5);
    expect(result).toBe(8);
  });

})
