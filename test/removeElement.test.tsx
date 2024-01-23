import { removeElement } from '../src/removeElement'

describe("Remove Element", () => {
    
    it("should be size 2", () => {
        const result = removeElement([3,2,2,3], 3);
        expect(result).toBe(2);
    });

    it("should be size 5", () => {
        const result = removeElement([0,1,2,2,3,0,4,2], 2);
        expect(result).toBe(5);
    });

});