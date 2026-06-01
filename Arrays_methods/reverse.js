const numeros = [1, 2, 3,4 ,5]
const numerosInvertido = numeros.reverse()
console.log(numerosInvertido)

const palavras = ["JavaScript", "é", "legal"];
palavras.reverse();

console.log(palavras);  

//  Inverter uma string (caractere a caractere)
// Como reverse() trabalha só em arrays, combinamos com split() e join()
const str = "JavaScript";
const invertida = str
  .split("")
  .reverse()      
  .join("");      

console.log(invertida);  