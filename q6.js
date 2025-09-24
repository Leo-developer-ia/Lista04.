const prompt = require('prompt-sync')();

nome = prompt("digite seu nome de usuario");
senha = prompt("digite sua senha");

nomev= "joao"
senhav= "12345"

if(nome== nomev || senhav== senha){
console.log("acesso permitido")
}
else{
    console.log("acesso negado")
}