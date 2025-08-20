// way-1
let arr = [2,2,1];  //1

let freq = {};

for(let num of arr){
    freq[num] = (freq[num] || 0)+1;
}
for(let num in freq){
    if(freq[num] === 1){
        console.log(Number(num));
    }
}
// Time complexity :- O(n)
// Space complexity :- O(n)


//way-2
let arr2 = [2,2,1];  //1
let xor = 0;

for(let num of arr2){
    xor ^= num;
}
console.log(xor);
// Time complexity :- O(n)
// Space complexity :- O(1)