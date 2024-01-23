import { lengthOfLastWord } from '../../src/ArraysHashing/lengthOfLastWord'

describe('Length of Last Word', () => {
  it('should return size 5 for World', () => {
    const result = lengthOfLastWord('Hello World')
    expect(result).toBe(5)
  })

  it('should return 4 for moon', () => {
    const result = lengthOfLastWord('   fly me   to   the moon  ')
    expect(result).toBe(4)
  })

  it('should return 6 for joyboy', () => {
    const result = lengthOfLastWord('luffy is still joyboy')
    expect(result).toBe(6)
  })
})
