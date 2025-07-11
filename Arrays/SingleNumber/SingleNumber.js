let arr = [4,1,2,1,2]   //4

let hashmap = {};

for(let i=0; i<arr.length; i++){
    hashmap[arr[i]] = (hashmap[arr[i]] || 0) +1;
}
for(let key in hashmap){
    if(hashmap[key] === 1){
        console.log('single number is : ', key);
    }
}
// Time complexity is O(n)
// Space complexity is O(n)