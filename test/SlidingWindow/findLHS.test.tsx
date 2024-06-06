import { findLHS } from '../../src/SlidingWindow/findLHS'

describe('Longest Harmonious Subsequence', () => {
  it('should return 5 for [1,3,2,2,5,2,3,7]', () => {
    const result = findLHS([1, 3, 2, 2, 5, 2, 3, 7])
    expect(result).toBe(5)
  })

  it('should return 2 for [1,2,3,4]', () => {
    const result = findLHS([1, 2, 3, 4])
    expect(result).toBe(2)
  })

  it('should return 0 for [1,2,3,1,2,3] and 2', () => {
    const result = findLHS([1, 1, 1, 1])
    expect(result).toBe(0)
  })
}
)