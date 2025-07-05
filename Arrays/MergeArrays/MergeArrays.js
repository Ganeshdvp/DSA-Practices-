//way-1
let arr1 = [0,0,1,0,0];   //[0,0,0,1,4]  //sorted output
let arr2 =[0,4,5,6];
let m = 3;
let n = 2;

let newArray = [];

for(let i=0; i<m; i++){
    newArray.push(arr1[i])
}
for(let j=0; j<n; j++){
    newArray.push(arr2[j])
}

console.log(newArray.sort());
// Time complexity :- O((m+n) * log(m+n)) because we are using two loops which is O(m+n) and O(m+n), and also we are using the sort function so log(m+n)
// space complexity :- O(m+n) because we are storing m and n elements only!


// way 2   // without sorted!
let array1 = [0,0,1,0,0];
let array2 =[0,4,5,6];
let x = 3;
let y = 2;

let a = x-1;
let b = y-1;
let k = x+y-1

while(b>=0){
    array1[k] = array2[b];
    k--;
    b--;
}
console.log(array1);
// Time complexity :- O(n) because are using while loop!
// Space complexity :- O(1)


//way -2   // sorted 
let ar1 = [0,0,1,0,0];
let ar2 =[0,4,5,6];
let p = 3;
let q = 2;

let r = p-1;
let s = q-1;
let t = p+q-1;

while(s>=0){
    if(s>=0 && ar1[r] > ar2[s]){
        ar1[t] = ar1[r];
        r--;
    }
    else{
        ar1[t] = ar2[s];
        s--;
    }
    t--;
}

console.log(ar1);
// Time complexity :- O(p+q)
// Space complexity :- O(1)

