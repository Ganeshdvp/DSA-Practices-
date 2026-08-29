// Merge Two Sorted Linked List - Ref 21 leetcode problem

var mergeTwoLists = function (list1, list2) {
  if (!list1 && !list2) return list1;
  if (!list1) return list2;
  if (!list2) return list1;

  let sentinel = new ListNode();
  let sentinelHead = sentinel;

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      sentinel.next = list1;
      list1 = list1.next;
    } else {
      sentinel.next = list2;
      list2 = list2.next;
    }
    sentinel = sentinel.next;
  }
  sentinel.next = list1 ? list1 : list2;

  return sentinelHead.next;
};

// Time complexity - O(m+n)
// Space complexity - O(1)