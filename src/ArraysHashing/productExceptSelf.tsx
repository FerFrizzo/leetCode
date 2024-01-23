export function productExceptSelf(nums: number[]): number[] {
  const output: number[] = []
  let prefix = 1
  for (let i = 0; i < nums.length; i++) {
    output.push(prefix)
    prefix = prefix * nums[i]
  }

  let postfix = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = (output[i] * postfix)
    postfix = postfix * nums[i]
  }

  return output
}