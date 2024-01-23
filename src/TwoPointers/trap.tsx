export function trap(height: number[]): number {

  if (height.length === 0) return 0

  let sum = 0

  let left = 0
  let right = height.length - 1
  let maxLeft = height[left]
  let maxRight = height[right]

  while (left < right) {
    if (maxLeft < maxRight) {
      left++
      maxLeft = Math.max(maxLeft, height[left])
      sum += maxLeft - height[left]
    }
    else {
      right--
      maxRight = Math.max(maxRight, height[right])
      sum += maxRight - height[right]
    }
  }


  // //this works when the map is going up
  // while (right !== height.length - 1 && left !== height.length - 2) {
  //   const leftPointer = height[left]
  //   const rightPointer = height[right]

  //   if (leftPointer > rightPointer) {
  //     sum += (left - right)
  //     right++
  //   } else if (leftPointer < rightPointer) {
  //     left++
  //   } else {
  //     right++
  //   }
  // }

  // // check how to handle going down and flat maps

  return sum
}