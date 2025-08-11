let arr = [4,5,6,7,0,1,2];
let target = 0;

let low = 0;
let high = arr.length-1;  //6

const Element = (arr)=>{
    while(low<=high){
    let mid = Math.floor((low+high)/2);

    if(arr[mid] === target){
        return mid;
    }
    else if(arr[mid] >= arr[low]){
        if(arr[low] <= target && arr[mid] >= target){
            high = mid-1;
        }
        else{
            low = mid+1;
        }
    }
    else{
        if(arr[mid] <=target && arr[high] >= target){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
    }
    return -1;
}
console.log(Element(arr));
// Time complexity :- O(logn)
// Space complexity :- O(1)