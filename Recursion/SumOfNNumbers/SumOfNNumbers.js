// without recursion
let n=5; // 15
let sum = 0;

for(let i=1; i<=n; i++){
    sum += i;
}
console.log(sum);
// Time complexity :- O(n)
// Space complexity :- O(1)


// With recursion
let p = 5;  //15

function RecursionSum(n){
    if(n==0){  //base case
        return n;
    }
    return n+ RecursionSum(n-1);   //recursive case
}
console.log(RecursionSum(p));
// Time complexity :- O(n) because it runs n to 0.
// Space complexity :- O(n) because every recursion call adds in stack memory.