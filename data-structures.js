//piece of data - val 
//reference to next node

class Node{
    constructor(val){
        this.val =  val;
        this.next = null;//made null so we can assign this later
    }
}

class SinglyLinkedList{
    constructor(){ //SLL a head, a tail, and needs a length
        this.head = null;
        this.tail =  null;
        this.length = 0;
    }
    push(val){ 
        var newNode =  new Node(val) ;   //variable that holds a new Node instance
        if(!this.head){    //if there is no head ie empty list, set head and tail to newNode
            this.head = newNode;    //newNode is head
            this.tail =  this.head;   //head and tail are same thing in an empty list
        } else {       //otherwise, if there is a val
            this.tail.next = newNode    // add to end of current tail, creates a new set the "next" property on the tail then... 
            this.tail = newNode    //update the tail property to the newly created node , moves tail marker over     
             }       
    this.length++;          //increment list length
    return this;
   
}

 pop(){
    if(!this.head) return undefined;
        var current = this.head; //start - this also will hit the end
        var newTail = current;   //increment - second to last value that will become the tail
        while (current.next){ //while there exists a current.next ie a next value on list to last val on list
            newTail = current; //newTail moves to where current val is.. ie next on list
            current = current.next; // ;then that current is handed off to current.next, one ahead of newTail 
                                   

        }
            
        this.tail = newTail;   //newTail becomes tail
        this.tail.next = null;  //old tail disappears
        this.length--;         //length of list is shortened
         if(this.length === 0){ //if list is empty, head and tail become null
            this.head = null;
            this.tail = null;
        }
        return current

}
shift(){
    if(!this.head) return undefined; //nothing in list returns undefined
    var currentHead = this.head;  // current head is this.head
    this.head = currentHead.next //assigns this.head to next value in list
    this.length--;
    if(this.length === 0){ //makes null if list length becomes 0
        this.tail = null;
    }
    return currentHead //old removed head, since head was assigned to next value and list decremented

}

unshift(val){
    var newNode = new Node(val)
    if(!this.head){ //if list is empty, 
        this.head = newNode; //both head and tail set to newNode
        this.tail = this.head;
    } else {   //code only runs if there is something in list
    newNode.next = this.head; //shifts current head property to next one down the list
    this.head = newNode; //places newNode at front and set as head
    
    }
    this.length++; //increments the list
    return this;
}

get(index){//takes in an index
    if(index < 0 || index >= this.length) return null; //if index doesn't exist in list
    var counter = 0; //needed to traverse to desired index
    var current = this.head; //what we want to return
    while(counter !== index){ //while counter is not == to the index we want...
        current = current.next; //...move down one at a time until it is
        counter++; //must equal index
    }
    return current;
}

    


    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
}

var list = new SinglyLinkedList()

list.push("HELLO")  
list.push("GOODBYE") 
list.push("!") 
list.push("<3")
list.push(":)") 


