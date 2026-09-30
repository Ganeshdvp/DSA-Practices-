// First bad version - Ref 278 leetcode problem


var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 0;
        let right = n;

        while(left < right){
            let mid = left + Math.floor((right-left)/2);

            if(!isBadVersion(mid)){
                left = mid + 1
            }
            else{
                right = mid
            }
        }
        return right;
    };
};

// Time complexity :- O(logn)
// Space complexity :- O(1)