// Linked List Cycle - ref 141 leetcode problem

var hasCycle = function(head) {
    let seenNodes = new Set();
    let current = head;

    while(current != null){
        if(seenNodes.has(current)){
            return true;
        }
        seenNodes.add(current);
        current = current.next;
    }
    return false;
};

// Time complexity - O(n)
// Space complexity - O(n)



// by using Floyd's cycle finding algorithm we can achieve space complexity is O(1).
// it means if the cycle exists(slow === fast) then return true else false.

var hasCycle = function(head) {

    if(head === null) return false;

    let slow = head;
    let fast = head.next;

    while(slow != fast){
        if(fast === null || fast.next === null){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};

// Time complexity - O(n)
// Space complexity - O(1)