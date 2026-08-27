// Remove Duplicates from Sorted List - Ref 83 leetcode problem

var deleteDuplicates = function(head) {
    let sentinel = new ListNode();
    sentinel.next = head;

    let mySet = new Set();
    let prev = sentinel;

    while(prev.next != null){
        if(mySet.has(prev.next.val)){
            prev.next = prev.next.next
        }
        else{
            mySet.add(prev.next.val);
            prev = prev.next;
        }
    }
    return sentinel.next
};

// Time complexity - O(n)
// Space complexity - O(n)


var deleteDuplicates = function(head) {
    let current = head;
    while(current != null && current.next != null){
        if(current.val === current.next.val){
            current.next = current.next.next;
        }
        else{
            current = current.next;
        }
    }
    return head;
};

// Time complexity - O(n)
// Space complexity - O(1)