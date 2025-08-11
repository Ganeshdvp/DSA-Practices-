// find peak index in mountain array  #leetcode852
let arr = [0,2,1,0];   // 1

let low = 0;
let high = arr.length - 1;

while(low < high){
    let mid = Math.floor((low+high)/2);

    if(arr[mid]>arr[mid+1]){
        high = mid;
    }
    else{
        low = mid + 1;
    }
}
console.log(low);
// Time complexity :- O(logn)
// Space complexity :- O(1)