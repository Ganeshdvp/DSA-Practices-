//way-1
let arr = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];  // true
let target = 3;

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        if(arr[i][j] == target){
            console.log('true');
        }
    }
}
// Time complexity :- O(n*2)
// Space complexity :- O(1)


//way-2
let arr2 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];  // true
let target2 = 1;

let row = arr2.length;   // 3
let col = arr2[0].length; // 4

let low = 0;
let high = (row * col) - 1;    // 11

while (low <= high){
    let mid = Math.floor((low + high)/2);  //5
    let row2 = Math.floor( mid / col);   //1
    let col2 = mid % col  //1
    let middle_value = arr2[row2][col2];

    if(middle_value == target2){
        console.log('true');
        break;
    }
    else if (middle_value < target2){
        low = mid+1;
    }
    else {
        high = mid-1;
    }
}
// Time complexity :- O(log(m*n))
// Space complexity :- O(1)



