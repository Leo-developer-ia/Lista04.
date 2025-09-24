const prompt = require('prompt-sync')();

n1 = prompt("digite um numero");
n2 = prompt("digite um numero");
n3 = prompt("digite um numero");

if (n1>n2 && n1>n3){
    console.log(n1)
}
if (n2>n1 && n2>n3){
    console.log(n2)
}
if (n3>n1 && n2<n3){
    console.log(n3)
}
if (n1==n2 && n1==n3){
    console.log("os numeros sao iguais")
}