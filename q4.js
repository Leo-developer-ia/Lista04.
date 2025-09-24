const prompt = require('prompt-sync')();

const n1 = prompt("digite um numero");
const n2 = prompt("digite um numero");
const op = prompt("digite a operaçao[x,+,-,/]");

switch(op){
    case "x":
        resultado= n1*n2
        console.log(resultado)
        break
    case "/":
        resultado= n1/n2
        console.log(resultado)
        break
    case "+":
        resultado= n1+n2
        console.log(resultado)
        break
    case "-":
        resultado= n1-n2
        console.log(resultado)
        break
    default:
        console.log("digite novamente")
        
}