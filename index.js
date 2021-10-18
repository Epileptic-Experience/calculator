let num1 = 1 

let num2 = 3

document.getElementById("first-num").textContent = num1
document.getElementById("scnd-num").textContent = num2


function add() {
    total = num1 + num2
    document.getElementById("total-el").textContent = `=${total}` 
    console.log(total)
}


function substract() {
    total = num1 - num2
    document.getElementById("total-el").textContent = `=${total}` 
    console.log(total)
}

function divide() {
    total = num1 / num2
    document.getElementById("total-el").textContent = `=${total}` 
    console.log(total)
}

function multiply() {
    total = num1 * num2
    document.getElementById("total-el").textContent = `=${total}` 
    console.log(total)
}
