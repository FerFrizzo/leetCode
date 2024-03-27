import { dailyTemperatures } from "../../src/Stack/dailyTemperatures"

describe("Daily Temperatures", () => {
  it("should return an array with the count between temps", () => {
    const result = dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
    expect(result).toStrictEqual([1, 1, 4, 2, 1, 1, 0, 0]);
  });

  it("should whatever the test1", () => {
    const result = dailyTemperatures([30, 40, 50, 60]);
    expect(result).toStrictEqual([1, 1, 1, 0]);
  });

  it("should whatever the test2", () => {
    const result = dailyTemperatures([30, 60, 90]);
    expect(result).toStrictEqual([1, 1, 0]);
  });


});
