import { addBinary } from '../../src/TwoPointers/addBinary'

describe('Add Binary', () => {
  it("should respond 100 when 11 + 1", () => {
    const result = addBinary('11', '1');
    expect(result).toBe("100");
  });

  it("should respond 10101 when 1010 + 1011", () => {
    const result = addBinary('1010', '1011');
    expect(result).toBe("10101");
  });

})
