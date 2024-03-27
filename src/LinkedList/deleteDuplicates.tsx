import { ListNode } from "./ListNode";

export function deleteDuplicates(head: ListNode | null): ListNode | null {

  if (head === null) return null

  const l1 = head.next

  if (head.val === l1?.val) {
    head.next = l1.next
    deleteDuplicates(head)
  } else if (l1?.next !== null) {
    deleteDuplicates(head.next)
  }

  return head
}