let n= 3;

function main(n){
    let newArray = [];
    solve("",0,0,n,newArray);
    return newArray;
}

function solve(s,open,close,n,newArray){
    if(s.length === 2*n){
        newArray.push(s);
        return;
    }
    if(open < n){
        solve(s+'(', open+1, close, n, newArray);
    }
    if(close < open){
        solve(s+')', open, close+1, n, newArray);
    }
}
console.log(main(n));
//Time complexity :-O(4^n / √n)
// Space complexity :- O(4^n / √n)