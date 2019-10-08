

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




//add algorithm/function and arguments
document.getElementById("example").innerHTML = mergeSort([2, 5, 1, 7, 3, 9])