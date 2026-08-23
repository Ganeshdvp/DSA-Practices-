// Linked List
// 1- it is a linear data structure and used to store collection of data in non-contigous memory location.
// 2- it is connected with eachother by using reference field.
// 3- it is dynamic sized.
// 4- there are 2 types, single linked list and double linked list.
// 5- getting data is complex but insert/deletion is easy.
// 6- it required extra space ( in each node there is data + reference to next node)

// time and space complexity based on operations.
// getting/retriving - O(n)
// insert/deletion - O(1)


// creating the node
var Node = function(val) {
    this.val = val;
    this.next = null;
};

// create the linked list
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};

// getting the node
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size) return -1;

    let current = this.head;
    for(let i=0; i< index; i++){
        current = current.next
    }
    return current.val;
};

// add node at head
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++
};

// add node at tail
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if(this.head === null){
        this.head = newNode;
    }
    else{
        let current = this.head;
    while(current.next !== null){
        current = current.next
    }
   current.next = newNode;
    }
    this.size++
};

// add node at given index
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let newNode = new Node(val);

    if(index === 0){
        this.addAtHead(val);
        return;
    }
    else if(index === this.size){
        this.addAtTail(val)
        return;
    }
    else{
        let current = this.head;
    for(let i=0; i<(index-1); i++){
        current = current.next
    }
    newNode.next = current.next;
    current.next = newNode;
    }
    this.size++
};

// delete node based on index
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.size) return;
    else if(index === 0){
        this.head = this.head.next
    }
    else{
        let current = this.head;
    for(let i=0; i<(index-1); i++){
        current = current.next
    }
    current.next = current.next.next
    }
    this.size--
};