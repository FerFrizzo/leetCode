import { containsNearbyDuplicate } from '../../src/SlidingWindow/containsDuplicate'

describe('Contains Duplicate II', () => {
  it('should return true for [1, 2, 3, 1] and 3', () => {
    const result = containsNearbyDuplicate([1, 2, 3, 1], 3)
    expect(result).toBe(true)
  })

  it('should return true for [1, 0, 1, 1] and 1', () => {
    const result = containsNearbyDuplicate([1, 0, 1, 1], 1)
    expect(result).toBe(true)
  })

  it('should return false for [1,2,3,1,2,3] and 2', () => {
    const result = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)
    expect(result).toBe(false)
  })
}
)