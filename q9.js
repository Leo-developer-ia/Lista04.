const prompt = require('prompt-sync')();

tipo = prompt("digite o tipo de cliente");

switch (tipo) {
    case "estudante":
        console.log("voce tem 50 % de desconto")
        break

    case "aposentado":
        console.log("voce tem 30 % de desconto")
        break

    case "regular":
        console.log("voce tem 0 % de desconto")
        break

    default:
        console.log("erro")
}
