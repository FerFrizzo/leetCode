import { ListNode } from "../src/ListNode";
import { addTwoNumbers } from "../src/addTwoNumbers";

describe("Add Two Numbers", () => {
  test("running the addTwoNumbers function it should return the correct result", () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const result = addTwoNumbers(l1, l2);
    const expected = new ListNode(7, new ListNode(0, new ListNode(8)));
    expect(result).toStrictEqual(expected);
  });

  test('running the addTwoNumbers function it should return the right value', () => {
    const l1 = 
      new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
        new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
        new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
        new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
        new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
        new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
        new ListNode(1)))))))))))))))))))))))))))))));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const result = addTwoNumbers(l1, l2);
    const expected = 
      new ListNode(6, new ListNode(6, new ListNode(4,
        new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
          new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
          new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
          new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
          new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,
          new ListNode(0, new ListNode(0, new ListNode(1)))))))))))))))))))))))))))))));
    console.log(result);
    expect(result).toStrictEqual(expected);
  });
});
