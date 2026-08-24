// middle of the linked list - refer 876 leetcode problem


var middleNode = function(head) {
    let slow = head;
    let faster = head;

    while(faster != null && faster.next != null){
        slow = slow.next;
        faster = faster.next.next;
    }
    return slow;
};