// Odd Even Linked List - Ref 328 leetcode problem

var oddEvenList = function(head) {

    if(head == null || head.next == null) return head;

    let odd = head;
    let even = head.next;
    let evenStart = even;

    while(odd.next != null && even.next != null){
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenStart;
    return head;

};

// Time complexity - O(n)
// Space complexity - O(1)