// Implement Queue using Stacks - Ref 232 leetcode problems


// creating two stacks
var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

// pushing to stack
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

// removing first element
MyQueue.prototype.pop = function() {
    if(this.s2.length === 0){
        while(this.s1.length > 0){
            let ele = this.s1.pop();
            this.s2.push(ele);
        }
    }
    return this.s2.pop();
};

// getting first element
MyQueue.prototype.peek = function() {
    if(this.s2.length === 0){
        while(this.s1.length > 0){
            let ele = this.s1.pop();
            this.s2.push(ele);
        }
    }
    return this.s2[this.s2.length-1]
};

// checking empty or not
MyQueue.prototype.empty = function() {
    if(this.s1.length === 0 && this.s2.length === 0){
        return true
    }
    else{
        return false;
    }
};