import { findMaxAverage } from '../../src/SlidingWindow/findMaxAverage'

describe('Maximum Average Subarray I', () => {
  it('should return 12.75000 for nums = [1,12,-5,-6,50,3], k = 4', () => {
    const result = findMaxAverage([1, 12, -5, -6, 50, 3], 4)
    expect(result).toBe(12.75000)
  })

  it('should return 5 for nums = [5], k = 1', () => {
    const result = findMaxAverage([5], 1)
    expect(result).toBe(5)
  })

  it('should return 3.33333 for nums = [3,3,4,3,0], k = 3', () => {
    const result = findMaxAverage([3, 3, 4, 3, 0], 3)
    expect(result).toBe(3.33333)
  })

  it('should return 2 for nums = [0, 1, 1, 3, 3], k = 4', () => {
    const result = findMaxAverage([0, 1, 1, 3, 3], 4)
    expect(result).toBe(2)
  })
}
)