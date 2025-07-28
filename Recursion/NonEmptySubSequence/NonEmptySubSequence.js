// probelm :- Find the count of non-empty subsequences in A of size B with sum <=1000

let arr = [1,2,8];  //2
let B=2;

function main(arr,B){
    return subsequences(0,0,0,arr,B);
}


function subsequences(i,size,sum,arr,B){
    if(size == B){
        return sum <1000 ? 1 : 0;
    }
    if(i>= arr.length){
        return 0;
    }
    return subsequences(i+1,size+1,sum+arr[i],arr,B) + subsequences(i+1,size,sum,arr,B);
}

console.log(main(arr,B));
// Time complexity :- O(n)
// Space complexity :- O(1)