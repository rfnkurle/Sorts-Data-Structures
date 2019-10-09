//piece of data - val 
//reference to next node

class Node{ //creates node class that will be put into the linked list
    constructor(val){
        this.val =  val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){ //SLL a head, a tail and needs a length
        this.head = null;
        this.tail =  null;
        this.length = 0;
    }

    //push adds new value to end of linked list, the tail
    
    push(val){ 
        var newNode =  new Node(val) ;//creates newNode
        if(!this.head){ 
            this.head = newNode; //edgecase if there is no val then head = tail, val = new head and tail
            this.tail =  this.head;
        } else {
            this.tail.next = newNode //else if val is added and there is head, newNode becomes tail
            this.tail = newNode 
        }    
    this.length++;//list length added to with each new node
    return this;
   
}
}
var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")

