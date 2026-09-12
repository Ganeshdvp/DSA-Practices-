// Next Greater Element I - Ref 496 leetcode problem

var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = {};
    let res = [];
    let n = nums2.length;

    stack.push(nums2[n-1]);
    map[nums2[n-1]] = -1;


    for(let i=n-2; i>=0; i--){
        let top = stack[stack.length-1];
        if(nums2[i] < top){
           map[nums2[i]] = top;
           stack.push(nums2[i]);
        }
        else{
            while(stack.length){
                let lastEle = stack[stack.length-1];
                if(nums2[i] > lastEle){
                    stack.pop();
                }
                else{
                    map[nums2[i]] = lastEle;
                    stack.push(nums2[i]);
                    break;
                }
            }
            if(stack.length === 0){
                map[nums2[i]] = -1;
                stack.push(nums2[i])
            }
        }
    }

    for(let i=0; i<nums1.length; i++){
        if(map[nums1[i]]){
            res.push(map[nums1[i]])
        }
    }

    return res;
};


// Time complexity :- O(n)
// Space complexity :- O(n)