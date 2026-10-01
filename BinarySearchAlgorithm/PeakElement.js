// Find peak element - Ref 162 leetcode problem


var findPeakElement = function(nums) {
    if(nums.length < 2) return 0;
    let left = 0;
    let right = nums.length-1;

    while(left < right){
        let mid = left + Math.floor((right-left)/2);

        if(nums[mid] < nums[mid+1]){
            left = mid + 1;
        }
        else{
            right = mid;
        }
    }
        return left;
};
// Time complexity :- O(logn)
// Space complexity :- O(1)