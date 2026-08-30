// Rotate Linked List - Ref 61 leetcode problems

var rotateRight = function(head, k) {
    if(head === null || head.next === null) return head;

    // finding length
    let length = 0;
    let current = head;
    while(current != null){
        current = current.next;
        length++
    }

    // to avoid unnecessary rotations
    k = k % length; 

    // fixing pointers
    let slow = head;
    let fast = head;
    for(let i=0; i<k; i++){
        fast = fast.next;
    }

    // run pointer upto end
    while(fast.next != null){
        slow = slow.next;
        fast = fast.next;
    }

    fast.next = head;
    let newHead = slow.next;
    slow.next = null;
    
    return newHead;
};


// Time complexity - O(n)
// Space complexity - O(1)