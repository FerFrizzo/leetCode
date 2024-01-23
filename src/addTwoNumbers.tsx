import { ListNode } from './ListNode'

export function addTwoNumbers (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let [item1, item2] = ['', '']

  let l1Node = l1

  while ( l1Node !== null ) {
    item1 = l1Node.val + item1
    l1Node = l1Node?.next
  }

  let l2Node = l2

  while ( l2Node !== null ) {
    item2 = l2Node.val + item2
    l2Node = l2Node?.next
  }

  const number1 = BigInt( item1 )
  const number2 = BigInt( item2 )
  const result = number1 + number2
  const nodeResult = result.toString().split( '' ).reverse()
  const listNode = createNode( nodeResult )
  return listNode
}

function createNode ( numArr: string[] ): ListNode | null {
  let node: ListNode | null = null

  while ( numArr.length > 0 ) {
    const value = Number( numArr.pop() )
    node = new ListNode( value, node )
  }

  return node
}
