// Jewels and Stones - Ref 771 leetcode problems

var numJewelsInStones = function(jewels, stones) {
    let count = 0;

    for(let i=0; i<stones.length; i++){
        for(let j=0; j<jewels.length; j++){
            if(jewels[j] === stones[i]){
                count++;
                break;
            }
        }
    }
    return count;
};

// Time complexity - O(m*n)
// Space complexity - O(1)


var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    let jSet = new Set(jewels);

    for(let i=0; i<stones.length; i++){
        if(jSet.has(stones[i])){
            count++
        }
    }
    return count;
};

// Time complexity - O(n)
// Space complexity - O(n) -> if only letter then O(52) means O(1)