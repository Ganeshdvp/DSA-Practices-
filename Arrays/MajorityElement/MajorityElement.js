let arr = [3,2,3];   //3

let max = 0; 
for(let i=0; i<arr.length; i++){
    let count = 0;
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] === arr[j]){
            count++;
        }
    }
    if(count>max){
        max = arr[i];
    }
}
console.log(max);
// Time complexity :- O(n*n) - O(n)
// Space complexity :- O(1)


//way-2
let arr2 = [1,1,2,2,1,1,1];  //1
let majority = 0;
let c = 0;

for(let i=0; i<arr2.length; i++){    //boyer-moore algorithm
    if(c === 0){
        majority = arr2[i];
    }
    if(arr2[i] === majority){
        c++;
    }
    else{
        c--;
    }
}
//verification it majority element exists or not?
let c1 = 0;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === majority) {
        c1++;
    }
}
if (c1 > arr2.length / 2) {
    console.log("Majority element is:", majority);
} else {
    console.log("No majority element exists");
}
// Time complexity :- O(n)
// Space complexity :- O(1)