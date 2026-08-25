// Check Palindrome linked list - ref 234 leetcode problem


var isPalindrome = function(head) {
    // find mid element
    let slow = head;
    let fast = head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }

    // reverse linked list
    let prev = null;
    let current = slow;
    while(current != null){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    // checking palindrome
    let firstList = head;
    let secondList = prev;

    while(secondList != null){
        if(firstList.val === secondList.val){
            firstList = firstList.next;
            secondList = secondList.next;
        }
        else{
            return false;
        }
    }
    return true;

};

// Time complexity - O(n)
// Space complexity - O(1)