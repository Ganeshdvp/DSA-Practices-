// Reverse String II - 541 leetcode problem

var reverseStr = function(s, k) {
    s = s.split("");

    for(let i=0; i<s.length; i = i+(2*k)){
        for(let j = 0; j<Math.floor(k/2); j++){
            let temp = s[i+j];
            s[i+j] = s[i+k-1-j];
            s[i+k-1-j] = temp;
        }
    }
    return s.join("")
};

// Time complexity - O(n)
// Space complexity - O(n) - strings in js is immutable