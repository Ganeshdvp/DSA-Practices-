// find minimum days to make M bouquets  #leetcode1482
let arr = [1,10,3,10,2];
let m = 3;
let k = 1;


const MiniBloomDay = (arr,m,k)=>{
    let low = Math.min(...arr);    // 1
    let high = Math.max(...arr);   // 10
    let res = -1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);

        if(getBouquets(arr,mid,m,k)){
            res = mid;
            high = mid - 1;
        }
        else{
            low = mid+1;
        }
    }
    return res;
}

const getBouquets = (arr,mid,m,k)=>{
    let flowers_picked = 0;

    for(let i of arr){
        if(i <= mid){
            flowers_picked++;
        }

        if(flowers_picked == k){
            flowers_picked = 0;
            m--;
        }

        if(m == 0){
            return true;
        }
    }
    return false;
}
console.log(MiniBloomDay(arr,m,k));
// Time complexity :- O(n logn)
// Space complexity :- O(1)