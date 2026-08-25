// Intersection of Two Linked Lists - ref 160 leetcode problem.

var getIntersectionNode = function(headA, headB) {
    let seenNode = new Set();
    let firstList = headA;
    let secondList = headB;

    while(firstList != null){
        seenNode.add(firstList);
        firstList = firstList.next
    }

    while(secondList != null){
        if(seenNode.has(secondList)){
            return secondList;
            break;
        }
         seenNode.add(secondList);
         secondList = secondList.next;
    }

    return null;
};

// Time complexity - O(n)
// Space complexity - O(n)