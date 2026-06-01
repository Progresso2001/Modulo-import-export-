//Pegar parte de array

const valores = [1, 2,3,4,5]
const parte = valores.slice(1,4)
console.log(parte)

// Omitir fim (vai até o final)

const valores = [1, 2,3,4,5]
const resto = valores.slice(3)
console.log(resto)

// //Usar índices negativos
const valores = [1, 2,3,4,5]
const resto = valores.slice(-3)
console.log(resto)

// copia de Array
const original = [1, 2, 3];
const copia = original.slice();

console.log(copia);          
console.log(copia === original); 