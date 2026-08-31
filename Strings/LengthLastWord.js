// Length of last word - Ref 58 leetcode problem

var lengthOfLastWord = function(s) {
    let trim = s.trim();
    let split = trim.split(" ");
    let endWord = split[split.length-1];
    return endWord.length;
};

// Time complexity - O(n)
// Space complexity - O(n)


var lengthOfLastWord = function(s) {
    let n = s.length-1;
    while(n > 0){
        if(s[n] === " "){
            --n;
        }
        else{
            break;
        }
    }

    let count = 0;
    while(n>=0){
        if(s[n] != " "){
            --n;
            count++
        }
        else{
            break;
        }
    }
    return count;
};

// Time complexity - O(n)
// Space complexity - O(1)


// with one loop
var lengthOfLastWord = function(s) {
    let n = s.length-1;
    let count = 0;

    while(n>=0){
        if(s[n] != " "){
            count++
        }
        else if(count > 0){
            break;
        }
        --n;
    }
    return count;
};