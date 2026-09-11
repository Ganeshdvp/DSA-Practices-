// Remove Outermost Parentheses - Ref 1021 leetcode problem

var removeOuterParentheses = function (s) {
  let stack = [];
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      if (stack.length > 1) {
        res = res + s[i];
      }
    } else {
      if (stack.length > 1) {
        res = res + s[i];
      }
      stack.pop(s[i]);
    }
  }
  return res;
};

// Time complexity :- O(n)
// Space complexity :- O(n)


var removeOuterParentheses = function (s) {
    let count = 0;
    let res = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++
            if (count > 1) {
                res = res + s[i]
            }
        }
        else {
            if (count > 1) {
                res = res + s[i]
            }
           count--
        }
    }
    return res;
};

// Time complexity :- O(n)
// Space complexity :- O(1)