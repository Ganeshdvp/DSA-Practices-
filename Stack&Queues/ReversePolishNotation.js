//  Evaluate Reverse Polish Notation - Ref 150 leetcode problem

var evalRPN = function(tokens) {
    let stack = [];

    for(let i=0; i<tokens.length; i++){
        if(tokens[i] === '+' || tokens[i] === '-' || tokens[i] === '*' || tokens[i] === '/'){
            let a = stack.pop();
            let b = stack.pop();
            let finalRes = eval(`${b} ${tokens[i]} ${a}`)
            stack.push(Math.trunc(finalRes));
        }
        else{
            stack.push(tokens[i])
        }
    }

    return Number(stack.pop())
};

// Time complexity :- O(n)
// Space complexity :- O(n)


// without eval()
var evalRPN = function(tokens) {
    let stack = [];

    let map = {
        '+': (a,b)=> b+a,
        '-': (a,b)=> b-a,
        '*': (a,b)=> b*a,
        '/': (a,b)=> Math.trunc(b/a)
    }

    for(let i=0; i<tokens.length; i++){
        if(map[tokens[i]]){
            let a = stack.pop();
            let b = stack.pop();
            let finalRes = map[tokens[i]](Number(a),Number(b))
            stack.push(finalRes);
        }
        else{
            stack.push(tokens[i])
        }
    }
    return Number(stack.pop())
};

// Time complexity :- O(n)
// Space complexity :- O(n)