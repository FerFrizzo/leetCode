export function maxArea(height: number[]): number {
  let left = 0
  let right = height.length - 1
  let area: number = 0
  while (left !== right) {
    area = Math.max(calcArea(height[left], height[right], right - left), area)
    if (height[left] > height[right]) right--
    else left++
  }

  return area
}

export function calcArea(left: number, right: number, distance: number): number {
  const lowestHeight = (left > right) ? right : left
  return distance * lowestHeight
}