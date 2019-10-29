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

    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail; //set node to be popped off as tail
        
        if(this.length === 1){  //if length is 1 head and tail are null
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev; //sets second to last as new tail

            this.tail.next = null; //severs poppedNode from new tail ^ , chops off previous tail

            poppedNode.prev = null; //severs poppedNode.prev, leaving this.tail (new tail)
        }
        this.length --;
        return poppedNode;
    }


}