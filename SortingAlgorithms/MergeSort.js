let arr = [12,11,13,5,6,7];
let left = 0;
let right = arr.length-1 //5  


function merge_sort(arr,left,right){
    if(left<right){
        let mid = Math.floor((left+right)/2);

        merge_sort(arr,left,mid);
        merge_sort(arr,mid+1,right);

        // sort and merge karo
        merge(arr,left,mid,right);
    }
}
function merge(arr,left,mid,right){
    let i= left;
    let j= mid+1;

    let sorted = [];

    while(i<=mid && j<=right){
        if(arr[i]<=arr[j]){
            sorted.push(arr[i]);
            i+=1;
        }
        else{
            sorted.push(arr[j]);
            j+=1;
        }
    }
    while(i<=mid){
        sorted.push(arr[i]);
        i+=1;
    }
    while(j<=right){
        sorted.push(arr[j]);
        j+=1;
    }
    for(let k of sorted){
        arr[left++] = k;   // Copy sorted elements back to the original array
    }
}
merge_sort(arr,left,right);
console.log(arr);
// Time complexity :- O(n log n)
// Space complexity :- O(n)