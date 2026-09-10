// Min Stack - Ref 155 leetcode problem


var MinStack = function() {
    this.s = [];
};

MinStack.prototype.push = function(value) {
    if(this.s.length === 0){
        this.s.push([value, value])
    }
    else{
        let lastMinVal = this.s[this.s.length-1][1]
        let minVal = Math.min(value, lastMinVal)
        this.s.push([value, minVal])
    }
};

MinStack.prototype.pop = function() {
    this.s.pop()
};

MinStack.prototype.top = function() {
    return this.s[this.s.length-1][0]
};

MinStack.prototype.getMin = function() {
    return this.s[this.s.length-1][1]
};