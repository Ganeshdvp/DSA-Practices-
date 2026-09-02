// Split a String in Balanced Strings - Ref 1221 leetcode problems

var balancedStringSplit = function(s) {
    let count = 0;
    let r = 0;
    let l = 0;

    for(let i=0; i<s.length; i++){
        if(r === l){
            count++;
            r = 0;
            l = 0;
        }
        if(s[i] === 'R'){
            r++
        }
        else{
            l++
        }
    }
    return count;
};

// Time complexity - O(n)
// Space complexity - O(1)