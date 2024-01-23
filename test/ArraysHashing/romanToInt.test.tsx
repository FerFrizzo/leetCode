import { romanToInt } from "../../src/ArraysHashing/romanToInt";

describe("Roman to Integer", () => {
  it("should transform III into 3", () => {
    const result = romanToInt("III");
    expect(result).toBe(3);
  });

  it("should transform LVIII into 58", () => {
    const result = romanToInt("LVIII");
    expect(result).toBe(58);
  });

  it("should transform MCMXCIV into 1994", () => {
    const result = romanToInt("MCMXCIV");
    expect(result).toBe(1994);
  });

  it("should transform MMMCMXCIX into 3999", () => {
    const result = romanToInt("MMMCMXCIX");
    expect(result).toBe(3999);
  });

  it("should transform IV into 4", () => {
    const result = romanToInt("IV");
    expect(result).toBe(4);
  });

  it("should transform XIV into 14", () => {
    const result = romanToInt("XIV");
    expect(result).toBe(14);
  });

  it("should transform IX into 9", () => {
    const result = romanToInt("IX");
    expect(result).toBe(9);
  });

  it("should transform CMLII into 952", () => {
    const result = romanToInt("CMLII");
    expect(result).toBe(952);
  });
});
