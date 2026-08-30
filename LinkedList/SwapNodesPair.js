// Swap Nodes in Pairs - Ref 24 leetcode problem

var swapPairs = function (head) {
  if (head === null || head.next === null) return head;

  let sentinel = new ListNode();
  sentinel.next = head;

  let prev = sentinel;
  let current = head;
  let n = head.next;

  while (current != null && n != null) {
    prev.next = n;
    current.next = n.next;
    n.next = current;

    prev = current;
    current = prev.next;
    n = current && current.next;
  }

  return sentinel.next;
};

// Time complexity - O(n)
// Space complexity - O(1)


// recursion way
var swapPairs = function (head) {
  if (head === null || head.next === null) return head;

  let left = head;
  let right = head.next;

  left.next = swapPairs(right.next);
  right.next = left;

  return right;
};

// Time complexity - O(n)
// Space complexity - O(n)