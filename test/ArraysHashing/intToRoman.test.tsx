import { intToRoman } from '../../src/ArraysHashing/intToRoman'

describe('Integer to Roman', () => {
  it("should transform 3 into III", () => {
    const result = intToRoman(3);
    expect(result).toBe("III");
  });

  it("should transform 58 into LVIII", () => {
    const result = intToRoman(58);
    expect(result).toBe("LVIII");
  });

  it("should transform 1994 into MCMXCIV", () => {
    const result = intToRoman(1994);
    expect(result).toBe("MCMXCIV");
  });

  it("should transform 3999 into MMMCMXCIX", () => {
    const result = intToRoman(3999);
    expect(result).toBe("MMMCMXCIX");
  });

  it("should transform 4 into IV", () => {
    const result = intToRoman(4);
    expect(result).toBe("IV");
  });

  it("should transform 14 into XIV", () => {
    const result = intToRoman(14);
    expect(result).toBe("XIV");
  });

  it("should transform 9 into IX", () => {
    const result = intToRoman(9);
    expect(result).toBe('IX');
  });

  it("should transform 952 into CMLII", () => {
    const result = intToRoman(952);
    expect(result).toBe("CMLII");
  });
})
