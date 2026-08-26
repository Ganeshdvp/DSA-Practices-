// Remove Linked List Elements - Ref 203 leetcode problems
// sentinelNode :- dummy node


var removeElements = function(head, val) {
    let sentinelNode = new ListNode();
    sentinelNode.next = head;

    let prev = sentinelNode

    while(prev != null && prev.next != null){
        if(prev.next.val === val){
            prev.next = prev.next.next;
        }
        else{
             prev = prev.next;
        }
    }
    return sentinelNode.next;
};

// Time complexity - O(n)
// Space complexity - O(1)