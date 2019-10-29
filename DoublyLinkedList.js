class Node{
    constructor(val){
        this.val =  val;
        this.next = null;//made null so we can assign this later
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val); // creates a new node with val passed in
        if (this.length === 0){ //if there is nothing in list the newNode is the head and tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; //points to next node 99 -> 100
            newNode.prev = this.tail; //points back to previous node 99 <- 100
            this.tail = newNode; //sets newNode as the current tail
        }
        this.length++
        return this;
    }


}