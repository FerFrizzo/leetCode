export function searchInsert(nums: number[], target: number): number {
    let index = 0
    if (nums.includes(target)) {
        return nums.indexOf(target)
    }

    if (nums.length === 1) {
        return (target > nums[0]) ? 1 : 0
    }
    
    const middle = Math.floor(nums.length / 2) 
    const left = nums.slice(0, middle) 
    const right = nums.slice(middle)

    if (target < nums[middle]){
        return index += searchInsert(left, target)
    } else if (target > nums[middle]) {
        return index += (middle + searchInsert(right, target))
    }
    
    return middle
}