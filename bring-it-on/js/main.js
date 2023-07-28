// *Variables*
// Create a variable and console log the value

let x = 5
console.log(x)

// Create a variable, add 10 to it, and console the value

let y = 5 + 10
console.log(y)

// *Functions*
// Create a function that subtracts 4 numbers and console the difference

function subtracts4Numbers(a,b,c,d){
    console.log(a-b-c-d)
}

subtracts4Numbers(20,10,5,2)

// Create a function that divides one number by another and console the remainder

function subtracts4Numbers1(w,t){
    console.log(w/t)
}
subtracts4Numbers1(100,51)

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 console Jumanji

function subtracts4Numbers2(u,i){
    if(u+i > 50) {
        console.log("Jumanji")
    }
}
subtracts4Numbers2(20,700)

// Create a function that multiplys three numbers and if the product is divisible by 3 console ZEBRA

function subtracts4Numbers3(j,k,l){
    if((j*k*l) % 3 === 0) {
        console.log("ZEBRA")
    }
}
subtracts4Numbers3(5,3,1)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function subtracts4Numbers4(f,g){
   for (let i = 0; i < g; i++){
    console.log(f)
   }
}
subtracts4Numbers4("word", 4)