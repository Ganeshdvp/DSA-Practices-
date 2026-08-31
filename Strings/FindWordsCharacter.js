// Find Words Containing Character - Ref 2942 leetcode problems

var findWordsContaining = function(words, x) {
    let res = [];

    for(let i=0; i<words.length; i++){
        if(words[i].includes(x)){
            res.push(i)
        }
    }
    return res;
};


// Time complexity - O(m*n)
// Space complexity - O(1)


// without built-in methods
var findWordsContaining = function(words, x) {
    let res = [];

    for(let i=0; i<words.length; i++){
        for(let j=0; j<words[i].length; j++){
            if(words[i][j] === x){
                res.push(i);
                break;
            }
        }
    }
    return res;
};

// Time complexity - O(m*n)
// Space complexity - O(1)