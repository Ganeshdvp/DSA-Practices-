// way-1 with XOR
let arr = [1,1,2,3,3,4,4,8,8];   // 2

let xor = 0;

for(let i of arr){
    xor^=i;
}
console.log(xor);
// Time complexity :- O(n)
// Space complexity :- O(1)


//way-2 with binary search
let arr1 = [3,3,7,7,10,11,11];   // 2

function single(arr1){
    let low = 0;
    let high = arr1.length-1;

    while(low<high){
        let mid = Math.floor((low+high)/2);

        if(mid%2 === 1){
            mid--;
        }

        if(arr1[mid] === arr1[mid+1]){
            low = mid +2
        }
        else{
            high = mid;
        }
    }
    return arr1[low];
}
console.log(single(arr1));
// Time complexity :- O(logn)
// Space complexity :- O(1)