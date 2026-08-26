// Remove Nth Node From End of List - Ref 19 leetcode problem

var removeNthFromEnd = function (head, n) {
  let sentinelNode = new ListNode();
  sentinelNode.next = head;

  let length = 0;
  while (head != null) {
    length++;
    head = head.next;
  }

  let prev = sentinelNode;
  for (let i = 0; i < length - n; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;

  return sentinelNode.next;
};

// Time complexity - O(n)
// Space complexity - O(1)

var removeNthFromEnd = function (head, n) {
  let slow = sentinelNode;
  let fast = sentinelNode;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next != null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return sentinelNode.next;
};

// Time complexity - O(n)
// Space complexity - O(1)