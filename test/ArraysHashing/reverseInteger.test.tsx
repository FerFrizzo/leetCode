import { reverse } from '../../src/ArraysHashing/reverseInteger'

describe('Reverse Integer', () => {
  it('should return size 321 for 123', () => {
    const result = reverse(123)
    expect(result).toBe(321)
  })

  it('should return -321 for -123', () => {
    const result = reverse(-123)
    expect(result).toBe(-321)
  })

  it('should return 21 for 120', () => {
    const result = reverse(120)
    expect(result).toBe(21)
  })

  it('should return 0 for 1534236469', () => {
    const result = reverse(1534236469)
    expect(result).toBe(0)
  })
}
)