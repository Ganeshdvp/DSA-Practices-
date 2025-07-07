//way-1
let arr1 = [4,9,5];
let arr2 = [9,4,9,8,4];

let a= [...new Set(arr1)];
let b = [...new Set(arr2)];

let newAray = [];

for(let i=0; i<a.length; i++){
    for(let j=0; j<b.length; j++){
        if(a[i] === b[j]){
            newAray.push(a[i])
        }
    }
}
console.log(newAray);

// Time complexity :- O(n1+n2+n*m) because,we are using two sets which is n1 and n2 and we are using nested loops that is n*m
// Space complexity :- O(n1+n2) because we are storing set in variables!


//way-2
let nums1 = [1,2,2,1]; // [2]
let nums2 = [2,2];

let intersection = [];

for(let i=0; i<nums1.length; i++){
    for(let j=0; j<nums2.length; j++){
        if(nums1[i] === nums2[j] && !intersection.includes(nums1[i])){
            intersection.push(nums1[i])
        }
    }
}
console.log(intersection);
// Time complexity :- O(nums1.length * nums2.length)
// Space complexity :- O(min(nums1.length + nums2.length))



