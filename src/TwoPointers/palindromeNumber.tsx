export function isPalindrome ( x: number ): boolean {
    const num = x.toString().split( "" )
    const reverseNum = [...num].reverse()

    return num.join( "" ) === reverseNum.join( "" )
}