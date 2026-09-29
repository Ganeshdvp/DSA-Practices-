// SQRT of Number - Ref 69 leetcode problem

// way-1 
let n = 8;   // 2

function sqrt(x){
    return Math.floor(x ** 0.5);
}
console.log(sqrt(n));
// time complexity :- O(1)
// space complexity :- O(1)


// way-2  binary search
var mySqrt = function(x) {
    if(x<2) return x;

    let left = 2;
    let right = Math.floor(x/2);

    while (left <= right){
        let mid = Math.floor((left+right)/2);

        if(mid * mid === x){
            return mid;
        }
        else if(mid * mid > x){
            right = mid-1;
        }
        else{
            left = mid+1;
        }
    }
    return right;
};
// time complexity :- O(logn)
// space complexity :- O(1)