let commands = ["RIGHT","DOWN"];
let n = 2;

let row=0;
let col=0;

for(let command of commands){
    if(command == 'DOWN'){
        row++;
    }
    if(command == 'UP'){
        row--;
    }
    if(command == 'LEFT'){
        col--;
    }
    if(command == 'RIGHT'){
        col++;
    }
}
console.log((row*n) + col);
// Time complexity :- O(k) because it runs upto commands!
//space complexity :- O(1)