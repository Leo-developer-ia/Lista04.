const prompt = require('prompt-sync')();

const temp = prompt("qual a temperatura");
const escala = prompt("qual a escala");

if (escala=="c"){
    emfaremheit= 5/9 * (escala - 32)
    console.log("em farenheit é ", emfaremheit)
}
else{
    emcelsius =  5/9 * (escala -32)
    console.log("emcelsius é", emcelsius)
}