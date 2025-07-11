let arr = [1,2]; // 5

let minProfit = Infinity;
let maxProfit = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i] < minProfit){
        minProfit = arr[i];
    }
    else{
        maxProfit = Math.max(maxProfit, arr[i] - minProfit)
    }
}
console.log(maxProfit);
// Time complexity :- O(n)
// Space complexity :- O(1)
