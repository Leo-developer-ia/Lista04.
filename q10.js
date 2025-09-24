const prompt = require('prompt-sync')();

ano = prompt("digite o ano");

if(ano % 4 ==0 && ano % 100 == 0){
    console.log("é um ano bissexto")

}
else{
    console.log("nao é um ano bissexto")
}