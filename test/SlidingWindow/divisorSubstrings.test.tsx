import { divisorSubstrings } from '../../src/SlidingWindow/divisorSubstrings'

describe('Longest Harmonious Subsequence', () => {
  it('should return 2 for num = 240, k = 2', () => {
    const result = divisorSubstrings(240, 2)
    expect(result).toBe(2)
  })

  it('should return 2 for num = 430043, k = 2', () => {
    const result = divisorSubstrings(430043, 2)
    expect(result).toBe(2)
  })
}
)