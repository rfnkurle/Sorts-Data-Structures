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

    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        this.head = oldHead.next; //sets head to next on list
        this.head.prev = null; //severs connection from new head pointing leftward to old head
        oldHead.next = null; //sever connection from oldHead rightward to current new head
        this.length--;
        return oldHead;
    }

    unshift(val){
        var newNode = newNode(val);
        if (this.length === 0){ //edge case where list is empty, newNode becomes head and tail
            this.head = newNode;
            this.tail = newNode;
        } else{

            this.head.prev = newNode; //places newNode in front of current head
            newNode.next = this.head;//asserts that this.head is newNode.next
            this.head = newNode; //changes newNode to be new head
        }
        this.length++;
        return this;

    }
        get(index){
            if(index < 0 || index >= this.length) return null;
            if(index <= this.length/2){
                var count = 0;
                var current = this.head
                while(count !=index){
                    current = current.next;
                    count++;
                }
    
            
        } else {
            var count = this.length -1;
            var current = this.tail;
            while (count !== index){
                current = current.prev;
                count--;
            }
            
           }
            return current;
        }
    
        set(index, val){
            var findNode = this.get(index);
            if(findNode != null){
                findNode.val = val;
                return true;
            }
        }

    
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false; //if doesnt exist on list return false
        if(index === 0) return this.unshift(val); //if first index, unshift() value to front
        if(index === this.length) return this.push(val); //if last index, push() to end
        
        var newNode = new Node(val); //sets newNode to value passed in 
        var preNode = this.get(index-1) // to insert need to find item before where you want to put it 
        var postNode = preNode.next //node to be after where newNode will be

        //connects all pre and posts with newNode
        preNode.next = newNode; //creates a newNode after preNode, points preNode to newNode
        newNode.prev = preNode;//points newNode back to preNode for double link
        newNode.next = postNode;//points newNode to postNode after it
        postNode.previous = newNode;//point postNode back toward newNode
        this.length++;
        return true;
    }



}