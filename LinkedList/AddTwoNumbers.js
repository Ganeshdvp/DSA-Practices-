// Add two numbers -Ref 2 leetcode problem

var addTwoNumbers = function(l1, l2) {
    let sentinelNode = new ListNode();
    let sentinelHead = sentinelNode;
    let carry = 0;

    while(l1 || l2 || carry){
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
        carry = Math.floor(sum/10);
        let digit = Math.floor(sum%10);

        let newNode = new ListNode(digit);
        sentinelNode.next = newNode;
        sentinelNode = sentinelNode.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return sentinelHead.next;

};

// Time complexity - O(l1+l2)
// Space complexity - O(1)