let arr = [[1,2,3],[4,5,6],[7,8,9]];   // [[1,4,7],[2,5,8],[3,6,9]]

let m = arr.length;
let n = arr[0].length;

let result = [];

for(let i=0; i< n; i++){  // cols
    let temp = [];
    for(let j=0; j<m; j++){   //rows
        temp.push(arr[j][i])
    }
    result.push(temp)
}
console.log(result);
// Time complexity :- O(m*n)
// space complexity :- O(m*n)


//way-2
let arr2 = [[1,2,3],[4,5,6],[7,8,9]];   // [[1,4,7],[2,5,8],[3,6,9]]

for(let i=0; i<arr2.length; i++){         // only it is good for 3*3 matrix
    for(let j=i+1; j<arr2.length; j++){
        [arr2[i][j], arr2[j][i]] = [arr2[j][i], arr2[i][j]];
    }
}
console.log(arr2);
// Time complexity :- O(m*n)
// Space complexity :- O(1)
