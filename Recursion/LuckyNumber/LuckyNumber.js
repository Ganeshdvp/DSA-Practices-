// way-1
let n = 19;

function LuckyNumber(n){
    let counter = 2;
    while (counter <=n ){
        if( n % counter === 0){
            return 0;
        }
        else{
            n = n-Math.floor(n/counter);
            counter++;
        }
    }
    return 1;
}
console.log(LuckyNumber(n));
// Time complexity :- O(n)
// Space complexity :- O(1)


//way-2 with recursion
let m = 19;

function LuckyRecursion(m, iterative=2){
    if(iterative > m) return 1;
    if(m % iterative === 0) return 0;

    return LuckyRecursion(m-Math.floor(m/iterative), iterative+1);
}
console.log(LuckyRecursion(m));
// Time complexity :- O(n)
// Space complexity :- O(n)