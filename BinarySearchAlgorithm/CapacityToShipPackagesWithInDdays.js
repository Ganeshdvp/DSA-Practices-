// Capacity to ship packages within D Days.    #leetcode1011
let weights = [1,2,3,4,5,6,7,8,9,10];     //15
let days = 5;


const Element = (weights,days)=>{
    let min = Math.max(...weights);  // 10
    let max = weights.reduce((a,b)=> a+b,0);  // 55


    while(min<=max){
        let mid = Math.floor((min+max)/2);

        if(Ship(weights,days,mid)){
            max = mid-1;
        }
        else{
            min = mid+1;
        }
    }
    return min;

}

const Ship = (weights,days,capacity)=>{
    let dayCount = 1;
    let currentLoad = 0;

    for(let i of weights){
        if(currentLoad+i > capacity){
            dayCount++;
            currentLoad = 0;
        }
        currentLoad+=i;

        if(dayCount > days){
            return false;
        }
    }
    return true;
}

console.log(Element(weights,days));

// Time complexity :- O(nlog(sum-max))
// Space complexity :- O(1)
