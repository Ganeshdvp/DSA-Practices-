let arr = [100,4,200,1,3,2];  //4

let unique = new Set(arr);
let longest = 0;

for(let num of unique){
    if(!unique.has(num-1)){
        let count = 1;
        let current = num;

        while(unique.has(current+1)){
            count+=1;
            current+=1;
        }
        longest = Math.max(longest,count);
    }
}
console.log(longest);
// Time complexity :- O(n)
// space complexity :- O(n)