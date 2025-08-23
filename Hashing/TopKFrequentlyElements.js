let arr = [1,1,1,2,2,3];
let k = 2;

let map = new Map();

for(let num of arr){    // counting frequiencies
    if(!map.has(num)){
        map.set(num,1);
    }
    else{
        map.set(num, map.get(num)+1);
    }
}

let freq = [...map];    // covert to array
freq.sort((a,b)=> b[1]-a[1])  // sorting desc order

let result = []       // final result
for(let i=0; i<k; i++){
    result.push(freq[i][0])
}
 
console.log(result);
// Time complexity :- O(n log n)
// Space complexity :- O(n)
