// it is used to compare the minimum number and swap it.

let arr = [64,25,12,22,11];

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] > arr[j]){
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
}
console.log(arr);
// time complexity :- O(n*2)
// space complexity :- O(1)