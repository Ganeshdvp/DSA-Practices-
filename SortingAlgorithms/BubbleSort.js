// bubble sort it used to sort the array in ascending/decending order.

let arr= [5,3,8,4,2];

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length-i-1; j++){
        if(arr[j] > arr[j+1]){
            [arr[j], arr[j+1]] = [arr[j+1],arr[j]];
        }
    }
}
console.log(arr);
// time complexity :- O(n*2)
// space complexity :- O(1)