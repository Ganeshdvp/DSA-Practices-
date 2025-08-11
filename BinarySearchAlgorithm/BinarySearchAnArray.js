let arr = [-1,0,3,5,9,12]; 
let target = 9;

let low = 0;
let high = arr.length - 1;

const Element = (arr)=> {
    while(low<=high){
    let mid = Math.floor((low+high)/2);

    if(target === arr[mid]){
        return mid;
    }
    else if(target > arr[mid]){
        low = mid + 1;
    }
    else{
        high = mid - 1;
    }
    }
    return -1;   // if not found
}
console.log(Element(arr));
// Time complexity :- O(logn)
// Space complexity :- O(1)
