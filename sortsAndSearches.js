

// function bubblesort(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr.length; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 temp = arr[j]
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;

//             }
//         }
//     }
//     return arr
// }

// bubblesort([2, 1, 4, 3, 6, 5, 8, 7, 9, 2])

// function selectionSort(arr){
    
    //     for (var i = 0; i < arr.length;i++){
    //         var smallest = i;
    //         for(var j = i+1; j < arr.length; j++){
    //             if( arr[j] < arr[smallest]){
    //                 smallest = j;
    //             }
    //             }
    //             console.log(arr)
    //             console.log("SWAPPING TO : ")
    //             var temp = arr[i];
    //             arr[i] = arr[smallest];
    //             arr[smallest] = temp
    //             console.log(arr)
    
    //         }
        
    //     return arr;
    // }
    
    // selectionSort([34,22,10,19,17])



    // function insertionSort(arr){
//     for(var i = 0; i < arr.length; i++){
//         var current = arr[i];
//         for(var j = i -1; j >= 0 && arr[j] > current]; j--){ //keep going if j is greater than 0 AND arr[j] is greater than current value
//             arr[j +1] = arr[j]
//         }
//         arr[j+1] = current 
//     }
//     return arr;
// }

// insertionSort([34,22,10,19,17])



// function linearSearch(arr, b){
//   for(var i = 0; i <= arr.length; i++){
//     if (arr[i] === b) return i;
//   }
//   return -1;
// }

// linearSearch([1,2,3,4], 3)




// function binarySearch(arr, a){
// var start = arr[0];
// var end = arr.length -1;
// var middle = Math.floor((start + end) / 2)
// while (arr[middle] !== a && start <= end){
//     if (a < arr[middle]){
//         end = middle -1;
//     }else{
//         start = middle +1
//     }
//     middle = Math.floor((start+end) /2);
// }
// return arr[middle] === a ? middle : -1

// }

// binarySearch([2,3,5,6,9,13,15,28], 15)







//add algorithm/function and arguments
document.getElementById("example").innerHTML = mergeSort([2, 5, 1, 7, 3, 9])