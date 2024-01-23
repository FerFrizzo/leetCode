import { ListNode } from "../src/ListNode";
import { mergeTwoLists } from '../src/mergeTwoLists'

describe("Merge Two Lists", () => {
  it("should return a ordered merged list", () => {
    const l1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
    const l2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
    const expected = new ListNode(1, new ListNode(1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4, null))))
      )
    );
    const result = mergeTwoLists(l1, l2);
    expect(result).toStrictEqual(expected)
  });

  it('should return empty if both listNodes are empty', () => {
    const result = mergeTwoLists(null, null)
    expect(result).toStrictEqual(null)
  });

  it('should return l2 if l1 is empty', () => {
    const l2 = new ListNode(0, null)
    const result = mergeTwoLists(null, l2)
    expect(result).toStrictEqual(l2)
  });
});
