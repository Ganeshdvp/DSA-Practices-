let arr = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];

let m = arr.length;
let n= arr[0].length;

let row = [];
let col = []; //[0,3]


for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
        if(arr[i][j] == 0){
            row.push(i);
            col.push(j);
        }
    }
}
let rows = [...new Set(row)]; //[1]

for(let i=0; i<rows.length; i++){
    for(let j=0; j<n; j++){
        arr[rows[i]][j] = 0;
    }
}
for(let i=0; i<m; i++){
    for(let j=0; j<col.length; j++){
        arr[i][col[j]] = 0;
    }
}

console.log(arr);
// Time complexity :- O(m*n)
// Space complexity :- O(m+n)