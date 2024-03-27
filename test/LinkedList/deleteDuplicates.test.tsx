import { ListNode } from "../../src/LinkedList/ListNode";
import { deleteDuplicates } from "../../src/LinkedList/deleteDuplicates"

describe("Delete Duplicates", () => {
  it("should return an array without duplicates", () => {
    const linkedList = new ListNode(1, new ListNode(1, new ListNode(2, null)))
    const result = deleteDuplicates(linkedList);
    const expectedResult = new ListNode(1, new ListNode(2, null))
    expect(result).toStrictEqual(expectedResult);
  });

  it('should return the array properly', () => {
    const linkedList =
      new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, null)))))

    const result = deleteDuplicates(linkedList)
    const expectedResult =
      new ListNode(1, new ListNode(2, new ListNode(3, null)))
    expect(result).toStrictEqual(expectedResult)
  })

});
