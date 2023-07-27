//Write your pseduo code first! 
//c to f

//need the value in 
//convert c to f
//output the value

document.querySelector("button").addEventListener("click", functioncToF)

function functioncToF(){

    let tempInC = Number(document.querySelector("input").value)
    let tempInF = tempInC*(9/5)+32
    document.querySelector("p").innerText = tempInF   
}




