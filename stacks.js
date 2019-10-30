//Stack Array implementation
//push() and pop() method for adding and remving from end of an array
//shift() and unshift() method for adding and removing beginning of array
//shift and unshift is not ideal

//Stack from scratch using Linked list

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;

    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop(){
        if(!this.first){
            var temp = this.first;
            if(this.first === this.last){
                this.last = null;
            }
            this.first = this.first.next;
            this.size--;
            return temp.value;
        }
    }
}