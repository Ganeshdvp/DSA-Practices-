let n = 3;  // 0 1 1 2 3 5 8 13..... n is index at 3 position which number is there return that

function fibanacci(n){
    if(n==0){
        return 0;
    }
    else if(n==1){
        return 1;
    }
    return fibanacci(n-1) + fibanacci(n-2);
}
console.log(fibanacci(n));
// Time complexity :- O(2n)
// Space complexity :- O(n)


// print fibanacci numbers
let m = 5;
let arr = [];

for(let i=0; i<=m; i++){
    if(i == 0){
        arr.push(0);
    }
    else if(i==1){
        arr.push(1);
    }
    else{
        arr.push(arr[i-1] + arr[i-2]);
    }
}
console.log(arr);
// Time complexity :- O(m)
// Space complexity :- O(m)