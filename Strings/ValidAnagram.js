// Valid anagram - Ref 242 leetcode problem


var isAnagram = function(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("")
};

// Time complexity - O(n logn)
// Space complexity - O(n)


var isAnagram = function(s, t) {
    if(s.length != t.length) return false;
    let map = {};

    for(let i=0; i<s.length; i++){
        if(map[s[i]]){
            map[s[i]]++
        }
        else{
            map[s[i]] = 1;
        }
    }

    for(let i=0; i<t.length; i++){
        if(!map[t[i]]){
            return false;
        }
        else{
            map[t[i]]--
        }
    }
    return true;
};
// Time complexity - O(n)
// Space complexity - O(1)