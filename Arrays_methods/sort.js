const vogais = ['e', 'i', 'u', 'o', 'a']
const ordenarVogais = vogais.sort()
console.log(ordenarVogais)

const frutas = ["Banana", "Orange", "Apple", "Mango"];
frutas.sort();

console.log(frutas);

// Ordenação numérica - Ordem crescente
const numeros = [10, 2, 30, 1];
numeros.sort((a, b) => a - b);

console.log(numeros); 

// Ordenação numérica - Ordem descrescente
const numeros = [10, 2, 30, 1];
numeros.sort((a, b) => b - a);

console.log(numeros); 

// ordenar objectos
const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 20 },
  { nome: "Carla", idade: 30 }
];

pessoas.sort((a, b) => a.idade - b.idade);

console.log(pessoas);

// Como ordenar sem modificar o original

const original = [3, 1, 2];

// Opção 1: spread + sort
const ordenado = [...original].sort((a, b) => a - b);

// Opção 2: toSorted() (moderno, não mutate)
const ordenado2 = original.toSorted((a, b) => a - b);
