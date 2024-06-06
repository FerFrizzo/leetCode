import { decrypt } from '../../src/SlidingWindow/decrypt'

describe('Defuse the bomb', () => {
  it('should return [12, 10, 16, 13] for code = [5,7,1,4], k = 3', () => {
    const result = decrypt([5, 7, 1, 4], 3)
    expect(result).toEqual([12, 10, 16, 13])
  })

  it('should return [0, 0, 0, 0,] for code = [1,2,3,4], k = 0', () => {
    const result = decrypt([1, 2, 3, 4], 0)
    expect(result).toEqual([0, 0, 0, 0,])
  })

  it('should return [12,5,6,13] for code = [2,4,9,3], k = -2', () => {
    const result = decrypt([2, 4, 9, 3], -2)
    expect(result).toEqual([12, 5, 6, 13])
  })
}
)