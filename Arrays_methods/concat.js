//  Concatenar dois arrays
const a = [1, 2]
const b =[3, 4]
const resultado = a.concat(b)
console.log(resultado)

// Concatenar arrays e valores

const a = [1, 2]
const resultado = a.concat(3, 4, [5, 6], 'Ola mundo!')
console.log(resultado)

// Concatenar sem argumentos (cópia rasa)
const original= [1, 2]
const copia = original.concat()
console.log(copia)
console.log(copia === original)

// Arrays aninhados não são "achatos"
const a = [1, 2];
const b = [[3, 4]];

const resultado = a.concat(b);

console.log(resultado);

