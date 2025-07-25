// this is good for only small numbers. for large numbers go for math.
let n=5;  // 5*4*3*2*1 = 120  here 1 zeros return 1

function Factorail(n){
    if(n == 1){
        return 1;
    }
    return n * Factorail(n-1);
}

function trailingZeros(n){
    let fact = Factorail(n);
    let count = 0;

    while(fact % 10 == 0){
        count++;
        fact /= 10;
    }
    return count;
}
console.log(trailingZeros(n));
//Time complexity :- O(n+log(fact))
// Space complexity :- O(n)



//way-2
let m = 5;
let count = 0;

while(m>=5){
    count += Math.floor(m/5);
    m = Math.floor(m/5);
}
console.log(count);
// Time complexity :- O(logn)
// space complexity :- O(1)