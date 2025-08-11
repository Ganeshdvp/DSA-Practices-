let arr = [4,5,6,7,0,1,2];  //0

function minimum(arr){
    let low = 0;
    let high = arr.length -1;

    while(low<high){
        let mid = Math.floor((low+high)/2);

        if(arr[mid] > arr[high]){
            low = mid + 1;
        }
        else{
            high = mid;
        }
    }
    return arr[low];
}
console.log(minimum(arr));
// Time complexity :- O(logn)
// Space complexity :- O(1)