import { calcArea, maxArea } from '../../src/TwoPointers/maxArea'

describe('Max Area', () => {
  it('should return 49 for this array', () => {
    const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
    expect(result).toBe(49)
  })

  it('should return 1 for 1-1', () => {
    const result = maxArea([1, 1])
    expect(result).toBe(1)
  })

  it(' should be 17 from [2,3,4,5,18,17,6] ', () => {
    const result = maxArea([2, 3, 4, 5, 18, 17, 6])
    expect(result).toBe(17)
  })
}
)

describe('Calc Area', () => {
  it('should return 49 to 8 and 7', () => {
    const result = calcArea(8, 7, 7)
    expect(result).toBe(49)
  })
})