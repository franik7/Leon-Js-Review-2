// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function arrayTaker(arr){
    if(arr[0]<arr[arr.length -1]){
        console.log("Hi")
    } else if (arr[0]>arr[arr.length -1]){
        console.log("Bye")
    } else {
        console.log("We close in an hour")
    }
}

arrayTaker([6,5,4])