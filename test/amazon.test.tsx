import { getMinimumFruits } from '../src/amazon';

describe("Amazon", () => {
  it("should do it", () => {
    const result = getMinimumFruits([3, 3, 1, 1, 2]);
    expect(result).toBe(1);
  });

  it('should do it 2', () => {
    const result = getMinimumFruits([1, 2, 5, 6]);
    expect(result).toBe(0);

  })
  it('should do it 3', () => {
    const result = getMinimumFruits([2, 2, 2, 5, 1, 2]);
    expect(result).toBe(2);

  })

})