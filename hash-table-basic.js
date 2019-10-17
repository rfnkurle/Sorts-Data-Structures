class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size); //keyMap stores size/length
    }

    _hash(key){
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total;
    }
    set(key, value){
        let index = this._hash(key); //hashes the key to get an index
        if(!this.keyMap[index]){  //if there isn't and index yet..
            this.keyMap[index] = []; //set index of keymap to empty array that next step will push into
        }
        this.keyMap[index].push([key, value]) //pushes key and value pair into array
    }
    get(key, value){
        let index = this._hash(key);//hash key provided to get an index
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){ //loops over every item in this index
                if(this.keyMap[index][i][0] === key){ //if [0] of that array = the key we are looking for..
                    return this.keyMap[index[i][1]] //...return [1], the value pair
                }
            }
        }
        return undefined;
    }

    values(){
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++) {//loops over whole key map
        if(this.keyMap[i]){
            for(let j = 0; j< this.keyMap[i].length; j++){
                valuesArr.push(this.keyMap[i][j])
            }
        }

        }

        return valuesArr;
    }
}
