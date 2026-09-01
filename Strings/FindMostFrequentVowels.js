// Find Most Frequent Vowel and Consonant - Ref 3541 leetcode problems.

var maxFreqSum = function(s) {
    let map = {};

    for(let i=0; i<s.length; i++){
        if(map[s[i]]){
            ++map[s[i]]
        }
        else{
            map[s[i]] = 1;
        }
    }
    let vowels = ['a','e','i','o','u'];
    let maxVowels = 0;
    let maxConsonents = 0;
    let mapKeys = Object.keys(map);

    for(let i=0; i<mapKeys.length; i++){
        if(vowels.includes(mapKeys[i])){
            if(maxVowels < map[mapKeys[i]]){
                maxVowels = map[mapKeys[i]];
            }
        }
        else{
            if(maxConsonents < map[mapKeys[i]]){
                maxConsonents = map[mapKeys[i]];
            }
        }
    }
    return maxVowels + maxConsonents;
};

// Time complexity - O(n)
// Space complexity - O(1)