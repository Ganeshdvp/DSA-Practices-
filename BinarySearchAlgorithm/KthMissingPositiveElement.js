// way -1 normal searching
let arr = [2,3,4,7,11];         // leetcode1539
let k = 5;

let newArray = [];
let num = 1;
let i = 0;

while(newArray.length < k){
    if( i < arr.length && arr[i] == num){
        i += 1;
    }
    else{
        newArray.push(num);
    }
    num += 1;
}
console.log(newArray[newArray.length-1]);
// Time complexity :- O(k+n)
// Space complexity :- O(k)



// way-2 binary searching
let arr1 = [2,3,4,7,11];
let k1 = 5;

let low =0 ;
let high = arr1.length-1;

while(low<=high){
    let mid = Math.floor((low+high)/2);
    let missing_count = arr1[mid] - (mid+1);

    if(missing_count < k1){
        low = mid+1;
    }
    else{
        high = mid-1;
    }
}
console.log(low+k1);
// time complexity :- O(logn)
// space complexity :- O(1)