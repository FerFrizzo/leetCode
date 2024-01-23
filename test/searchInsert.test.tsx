import { searchInsert } from '../src/searchInsert'
describe('Search Insert', () => {
    it('should return the index of the array if value is found', () => {
        const result = searchInsert([1,3,5,6], 5);
        expect(result).toBe(2);
    })

    it('should return the index of the array where number should be added when not found', () => {
        const result = searchInsert([1,3,5,7], 6);
        expect(result).toBe(3);
    })

    it('should return the last position when target is bigger than the last item of the array', () => {
        const result = searchInsert([1,3,5,6], 7);
        expect(result).toBe(4);
    })
})