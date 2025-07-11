let arr = [1,1,0,2,2,2,2,1,1,1];  // 3  [1,1,1] 3-1's

let candidate = arr[0];
let count = 1;
let maxCount = 1;
let finalCandidate = candidate;


for(let i=0; i<arr.length; i++){
    if(arr[i] == candidate){
        count++;
    }
    else{
        candidate = arr[i];
        count = 1;
    }

    if(count > maxCount){
        maxCount = count;
        finalCandidate = candidate;
    }
}
console.log('element : ', finalCandidate);
console.log('count : ', maxCount);

// Time complexity :- O(n)
// Space complexity :- O(1)
