import { plusOne } from '../src/plusOne'

describe('Plus one', () => {
  it('should return 124', () => {
    const result = plusOne([1, 2, 3])
    const expected = [1, 2, 4]
    expect(result.toString).toBe(expected.toString)
  })

  it('should return 4322', () => {
    const result = plusOne([4,3,2,1])
    const expected = [4, 3, 2, 2]
    expect(result.toString).toBe(expected.toString)
  })

  it('should return 10', () => {
    const result = plusOne([9])
    const expected = [1, 0]
    expect(result.toString).toBe(expected.toString)
  })

  it('should return 100', () => {
    const result = plusOne([9, 9])
    const expected = [1, 0, 0]
    expect(result.toString).toBe(expected.toString)
  })

  it('should return 90', () => {
    const result = plusOne([8, 9])
    const expected = [9, 0]
    expect(result.toString).toBe(expected.toString)
  })

  it('should return 1000', () => {
    const result = plusOne([9, 9, 9])
    const expected = [1, 0, 0, 0]
    expect(result.toString).toBe(expected.toString)
  })
})
