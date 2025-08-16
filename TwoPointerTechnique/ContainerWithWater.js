let arr = [1,8,6,2,5,4,8,3,7];
let i=0;
let j=arr.length-1;
let max = 0;

while(i<j){
    let area = Math.min(arr[i],arr[j]) * (j-i);
    max = Math.max(max,area);

    if(arr[i]<arr[j]){
        i+=1;
    }
    else{
        j-=1;
    }
}
console.log(max);
// Time complexity :- O(n)
// Space complexity :- O(1)