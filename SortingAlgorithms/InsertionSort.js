let arr= [23,1,10,5,2];

for(let i=1; i<arr.length; i++){
    let pick = arr[i];
    let j = i-1;

    while(j>=0 && arr[j]>pick){
        
        arr[j+1] = arr[j];
        j-=1;
        arr[j+1] = pick;
    }
}
console.log(arr);
// time complexity :- O(n*2)
// space complexity :- O(1)
