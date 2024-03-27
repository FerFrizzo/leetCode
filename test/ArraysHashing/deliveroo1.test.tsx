import { getProductSuggestions } from "../../src/ArraysHashing/deliveroo1"

describe("Deliveroo 1", () => {
  it("should whatever the test", () => {
    const result = getProductSuggestions(['abcd', 'adbc', 'abaa', 'acbd'], 'abad');
    expect(result).toBe([['abaa', 'abcd', 'adbc'], ['abaa', 'abcd', 'abdc'], ['abaa']]);
  });


});
