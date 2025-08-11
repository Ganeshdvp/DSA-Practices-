let arr = [1,3,5,6];   //2
let target = 5;

function search(arr){
    let low = 0;
    let high = arr.length - 1;

    while(low<high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid] > target){
            high = mid;
        }
        else{
            low = mid + 1;
        }
    }
    return low;
}
console.log(search(arr));
// Time complexity :- O(logn)
// Space complexity :- O(1)

