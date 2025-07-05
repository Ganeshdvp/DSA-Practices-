//way-1
let arr = [0,0,0,1,2,2,2,2,2,3,3,4];  // o/p: [0,0,1,2,2,3,3,4]
let newArray =[];

for(let i=0; i<arr.length; i++){
    let count =0 ;
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] == arr[j]){
            count++;
        }
    }[]
    if(count<2){
        newArray.push(arr[i])
    }
}
console.log(newArray);
// Time complexity :- O(n*2)
// space complexity :- O(n)
