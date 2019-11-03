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

?php 
include 'db.php';

if(isset($_POST['send'])){
    
    $name = $_POST['task'];
    
    $sql = "insert into tasks (name) values ('$name')";

    $val = $db->query($sql);

if($val){
   header('location: index.php');
}

}

?>