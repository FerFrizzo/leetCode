import { myAtoi } from '../../src/ArraysHashing/stringToInteger'

describe('String to Integer - My Atoy', () => {
  it('should return size 42 for 42', () => {
    const result = myAtoi('42')
    expect(result).toBe(42)
  })

  it('should return -42 for       -42', () => {
    const result = myAtoi('    -42')
    expect(result).toBe(-42)
  })

  it('should return 4193 for 4193 with words', () => {
    const result = myAtoi('4193 with words')
    expect(result).toBe(4193)
  })

  it('should return 0 for words with 987', () => {
    const result = myAtoi('words with 987')
    expect(result).toBe(0)
  })

  it('should return the min number if number is above 32 signal ', () => {
    const result = myAtoi('-91283472332')
    expect(result).toBe(-2147483648)
  })

  it('should return 0 for -+12 ', () => {
    const result = myAtoi('-+12')
    expect(result).toBe(0)
  })

  it('should return 0 for -', () => {
    const result = myAtoi('-')
    expect(result).toBe(0)
  })

}
)