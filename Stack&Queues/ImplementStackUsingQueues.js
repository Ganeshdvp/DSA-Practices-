// Implement Stack using Queues - Ref 225 leetcode problems

// creating queues
var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
};

// pushing element to queue
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

// remove element end
MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i=0; i<n-1; i++){
        let firstEle = this.q1.shift();
        this.q2.push(firstEle);
    }
    let res = this.q1.shift();
    
    // swaping q1 and q2
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return res;
};

// getting element at start
MyStack.prototype.top = function() {
    let n = this.q1.length
    for(let i=0; i<n-1; i++){
        let firstEle = this.q1.shift();
        this.q2.push(firstEle);
    }
    let res = this.q1[0];
    let firstEle = this.q1.shift();
    this.q2.push(firstEle);

    // swaping q1 and q2
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;

    return res;
};

// checking stack is empty or not.
MyStack.prototype.empty = function() {
    return this.q1.length === 0
};