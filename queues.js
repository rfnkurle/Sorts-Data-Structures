//remove from front of line with shift
//better to write your own Q class if you are concerned with performance

class Node{
    constructor(){
        this.value = val;
        this.next= null;
        this.size = 0;

    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = newNode(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode; 
        } else {
            this.last.next = newNode; //end
            this.last = newNode;//now ^ set to last

        }
        return ++this.size
    }
    
}

