//---Easy
//create a function that subtracts two numbers and console logs the difference

function nums(x,y){
    console.log(x-y)
}

nums(7,4)


//create a function that divides three numbers and console logs the quotient

function threeNums(a,b,c){
    console.log(a/b/c)
}

threeNums(30,2,3)

//create a function that multiplys three numbers and console logs the product

function threeNumsx(w,e,r){
    return(w*e*r)
}
let returnedVal = threeNumsx(30,2,3)
console.log(returnedVal)


//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function threeNumsxy(g,h,j){
    console.log((g + h) % j)
}

threeNumsxy(30,2,3)

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number


function threeNumsxyz(v,b,n,m){
    let first = v*b
if(first > 100){
    console.log(first + n + m)
    console.log("big")
} else if(first < 100){
    console.log(first - n-m)
    console.log("small")
} else if(first === 100){
    console.log((v*b*n) % m)
    console.log("good guess")
}
}

threeNumsxyz(20,5,3,4)