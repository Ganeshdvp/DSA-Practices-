let arr = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
let target = 3;

let m = arr.length;  //3
let n = arr[0].length;  //4
let low = 0;
let high = m*n-1  //11


const Element = (arr)=>{
    while(low<=high){
    let mid = Math.floor((low+high)/2);

    let row = Math.floor(mid/n);  //1
    let col = Math.floor(mid%n);  //1

    if(target === arr[row][col]){
        return true;
    }
    else if(target > arr[row][col]){
        low = mid + 1;
    }
    else{
        high = mid - 1;
    }
    }
    return false;
}
console.log(Element(arr));
// Time complexity :- O(log(m*n))
// Space complexity :- O(1)



