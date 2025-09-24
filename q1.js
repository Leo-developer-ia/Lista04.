const prompt = require('prompt-sync')();

const idade = prompt("Qual é a sua idade?");
if (idade>=0 && idade<=12){
    console.log("voce é uma criança")
}
if (idade>=13 && idade<=17){
    console.log("voce é um adolescente")
}
if (idade>=18 && idade<=59){
    console.log("voce é um adulto")
}
else {
    console.log("voce é um idoso")
}

