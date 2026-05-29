const numeros = [1, 3, 5, 8, 10, 14]
// usando arrow function
const primeiroPar = numeros.find(num=> num % 2 === 0)
// outra forma 
const primeiroPar = numeros.find(function(value){
    return value % 2 === 0
})
// console.log(primeiroPar)

// encontrar objeto por ID (muito comum em APIs)
const usuarios = [
  { id: 1, nome: "Ana", email: "ana@email.com" },
  { id: 2, nome: "Bruno", email: "bruno@email.com" },
  { id: 3, nome: "Carla", email: "carla@email.com" },
];

const dadoId = usuarios.find(user => user.id === 2)
// buscar por nome
const nomeUser = usuarios.find(user => user.nome == "Ana")
console.log(dadoId)
console.log(nomeUser)

// encontrar produto com estoque > 0

const produtos = [
  { nome: "Teclado", estoque: 0 },
  { nome: "Mouse", estoque: 5 },
  { nome: "Monitor", estoque: 0 },
];

const disponivel = produtos.find(p => p.estoque > 0);
// pegando nome e produto usando desestruturação
const nomesProdutoDisponivel = produtos.map(({ nome })=>({ nome }))
// pegando os produtos
// const nomesProdutoDisponivel = produtos.map(p=> p.nome)
// outra forma
const nomesProdutoDisponivel = produtos.map(nome=p =>p.nome)

console.log(disponivel);
console.log("Produtos disponivel na loja: ", nomesProdutoDisponivel)

// findIndex() para obter o índice
const usuarios = [
  { id: 1, nome: "Ana" },
  { id: 2, nome: "Bruno" },
  { id: 3, nome: "Carla" },
];

const indice = usuarios.findIndex(u => u.nome === "Ana");
const valorIndice = usuarios.findIndex((index) =>{
  return index
})
console.log(valorIndice)

console.log(indice);  

// usando funcao
let cachorrosEncontrados = [{
    breed: "Beagle",
    color: "branco"
  }, 
  {
    raca: "Chihuahua",
    color: "amarelo"
  },
  {
    breed: "Pug",
    color: "preto"
  },
]

function encontraMeuCachorro(cachorro) {
  return cachorro.raca === "Chihuahua"
}

let meuCachorro = cachorrosEncontrados.find(c=> encontraMeuCachorro(c));

console.log(meuCachorro);

// 1-criar um array de objectos , com prop(nomeAutor, livro)
const autorLivros =[
  {nomeAutor:'Joaquim', livro:'JavaScript Basico'},
  {nomeAutor:'DevJocas', livro:'Lear Python'},
  {nomeAutor:'Alberto', livro:'VsCode Pro'},
  {nomeAutor:'Ana Rosa', livro:'MySQL Lite'}
]
// 2- criar uma funcao que contem parametro dado e e verifica e retorna o valor do dado
function encontrarAutor(dado){
  if(dado.livro === 'Lear Python'){
    return dado
  }
}
// 3- criar umavariavel que vai armazenar os valor e encontrar
const autorAchado = autorLivros.find(autor =>encontrarAutor(autor))
const buscaIndex =  autorLivros.findIndex(u=>u.nomeAutor === 'DevJocas')

console.log("Nome do Autor do Livro: ",autorAchado.nomeAutor)
console.log("Posicção do indice: ",buscaIndex)
// Exemplos usando parametros padrao 
let posicionesReservadas = [{
    nombre: "Ana",
    edad: 24
  },

  {
    nombre: "Beth",
    edad: 22
  },

  {
    nombre: "Cara",
    edad: 25
  },
  
  {
    nombre: "David",
    edad: 30
  },
  
  {
    nombre: "Ethan",
    edad: 26
  }
]
function encontrarPorIndice(persona, indice) {
  return indice === 3
}
let miPosicion = posicionesReservadas.find((persona, indice) => encontrarPorIndice(persona, indice));
console.log(miPosicion);

// Encontrar com string

const nomes = ['Alice', 'Bento', 'DevJocas', 'Bianca', 'Paulo']
const nomeEncontrado = nomes.find(nome=> nome.startsWith('D'))
console.log("O nome do programador é: ", nomeEncontrado)

// find() com Funções de Seta vs Funções Regulares
const arr = [10, 20, 30];
function isTwenty(val) {
  return val === 20;
}
console.log(arr.find(isTwenty)); 

// find() com Parâmetros Desestruturados

const pessoa = [
    {nome: 'DevJocas', idade:25},
    {nome: 'Jocas', idade:35}
]
const adulto = pessoa.find(({ idade })=> idade > 30)
console.log(adulto)

// Encadeamento de find() com outros métodos
const items = [
  { id: 1, tags: ["a", "b"] },
  { id: 2, tags: ["c", "d"] }
];

const tag = items.find(item => item.tags.includes("c"))?.id;

console.log(tag); 

// Usando find() em grandes arrays

const bigArray = Array.from({ length: 10000 }, (_, i) => i);

const match = bigArray.find(n => n > 9990);

console.log(match); 

// Usos Práticos com HTML e o DOM

// Find the first button with a data-role of "primary"
const btn = Array.from(document.querySelectorAll("button"))
  .find(el => el.dataset.role === "primary");

console.log(btn?.textContent);
