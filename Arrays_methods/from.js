const str = 'Eu Amo o JavaScript'
const arr = Array.from(str)
console.log(arr)

//  Mapear elementos durante a criação
const numero = '123'
const arr = Array.from(numero, char => Number(char)*2)
console.log(arr)

//  Criar array a partir de um range (com mapeamento)
// Criar [0, 1, 2, 3, 4]
const arr = Array.from({ length: 5 }, (_, i) => i);

console.log(arr); 

// Aqui:

// { length: 5 } cria um objeto similar a array com 5 elementos (undefined)

// A função (_, i) => i gera os índices

// Converter um objeto similar a array
const pseudoArray = {
  0: "a",
  1: "b",
  2: "c",
  length: 3
};

const arr = Array.from(pseudoArray);

console.log(arr); 