// Next Greater Element II - Ref 503 leetcode problem

var nextGreaterElements = function(nums) {
    let arr = [...nums, ...nums];
    let n = arr.length;

    let stack = [];
    let res = Array(n).fill(-1);

    stack.push(arr[n-1]);

    for(let i=n-2; i>=0; i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i] < top){
                res[i] = top;
                break;
            }
            else{
                stack.pop();
            }
        }
        stack.push(arr[i])
    }

    return res.slice(0,n/2)
};


// Time complexity :- O(n)
// Space complexity :- O(n*2)


// without copying array 2 times
var nextGreaterElements = function(arr) {
    let n = arr.length;

    let stack = [];
    let res = Array(n).fill(-1);

    stack.push(arr[n-1]);

    for(let i=(2*n)-2; i>=0; i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i % n] < top){
                res[i % n] = top;
                break;
            }
            else{
                stack.pop();
            }
        }
        stack.push(arr[i % n])
    }

    return res.slice(0,n)
};

// Time complexity :- O(n)
// Space complexity :- O(n)