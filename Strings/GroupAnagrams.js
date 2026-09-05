// Group Anagrams -Ref 49 leetcode problems

var groupAnagrams = function(strs) {
    let map = {};

    for(let i=0; i<strs.length; i++){
        let sortedStr = strs[i].split("").sort().join("");

        if(!map[sortedStr]){
            map[sortedStr] = [strs[i]];
        }
        else{
            map[sortedStr].push(strs[i])
        }
    }
    return [...Object.values(map)]
};

// Time complexity - O(n * mlogm)
// Space complexity - O(n*m)


// optimized one
var groupAnagrams = function(strs) {
    let map = {}

    for(let i=0; i<strs.length; i++){

        // create array with 0's [0,0,0,0,0,0,0,0,.....]
        let freqArr = Array(26).fill(0);
        let s = strs[i];

        // increase number on character index [1,0,0,0,2,1,0,0,0,...]
        for(let j=0; j<s.length; j++){
            let index = s[j].charCodeAt() - 'a'.charCodeAt();  // get index
            freqArr[index]++;
        }

        // create key with characters [a1,b0,c0,d0,e1,f1,...]
        let key = "";
        for(let k=0; k<26; k++){
            key = key + String.fromCharCode(k) + freqArr[k];
        }

        // if key present push to existing one, if not create new one with key and value
        if(!map[key]){
            map[key] = [strs[i]];
        }
        else{
            map[key].push(strs[i])
        }
    }

    return [...Object.values(map)]
};

// Time complexity - O(n * m)
// Space complexity - O(n*m)