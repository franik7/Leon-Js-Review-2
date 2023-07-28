//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function newArr(arr){
let newArr2 = []
    for(let i = 0; i < arr.length; i++) {
if(arr[i] % 2 == 0){
newArr2.push(arr[i])
}
}console.log(newArr2)
}
newArr([2,4,5,64,45,6])