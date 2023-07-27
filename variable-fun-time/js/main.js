//--- Easy
//create a variable and assign it a number

let x = 11

//minus 10 from that number

x = x - 10

//print that number to the console

console.log(x)

//--- Medium
//create a variable that holds a value from the input

// let valueFromInput = Number(document.querySelector("input").value) 

//add 25 to that number

// valueFromInput += 25

//alert that number

// alert(valueFromInput)

//--- Hard
//create a variable that holds the h1

let hHolder = document.querySelector("h1")

//add an event listener to that element that console logs the sum of the two previous variables

hHolder.addEventListener("click", addTwo);

function addTwo(){
    let valueFromInput = Number(document.querySelector("input").value) 
    valueFromInput += 25
    console.log(valueFromInput + x)
}


