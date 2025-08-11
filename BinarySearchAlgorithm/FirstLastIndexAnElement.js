// find first and last position of an element on sorted array  #leetcode34

let arr = [5,7,7,8,8,10];
let target =8;

const Main = (arr,target)=>{
    let first = findPosition(true,arr,target);
    let last = findPosition(false,arr,target);

    if(first == -1) return [-1,-1];

    return [first,last];
}
const findPosition = (isFirst,arr,target)=>{
    let low = 0;
    let high = arr.length-1;  //5
    let bound = -1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid] == target){
            bound = mid;
            if(isFirst){
                high = mid-1;
            }
            else{
                low = mid+1;
            }
        }
        else if(target > arr[mid]){
            low = mid+1;
        }
        else{
            high =  mid-1;
        }
    }
    return bound;
}
console.log(Main(arr,target));
// Time complexity :- O(logn)
// space complexity :- O(1)
