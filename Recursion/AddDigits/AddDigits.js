let num =38  // 3+8 = 11   - 11 have two digits so return 2

while(num>=10){
    let sum = 0;
    while(num>0){
        sum += num % 10;
        num = Math.floor(num/10);
    }
    num = sum;
}
console.log(num)
// Time complexity :- O(n*2)
// Space complexity :- O(1)


//way-2 - recursion approach
function addDigits(n){
    if(n<10) return n;

    let sum = 0;
    while(n>0){
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return addDigits(sum);
}
console.log(addDigits(38));





//way-3 - Digital Root Approach
let n = 38;

function addDigits(n) {
    if (n === 0) {
        return 0;
    } else {
        return 1 + (n - 1) % 9;
    }
}
console.log(addDigits(n));
// Time complexity :- O(1)
// Space complexity :- O(1)

