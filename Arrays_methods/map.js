const nums = [1,2,3,4,5]
const dobro = nums.map(numeros=>{
    numeros*2
})
console.log(dobro)

// usando arrow function simplificada
const dobro = nums.map(numeros=>numeros*2)


// transformar objetos (muito comum em APIs)

const usuarios = [
    {id:1, nome:'joaquim', email:'joaquim@gmail.com'},
    {id:2, nome:'pedro', email:'pedro@gmail.com'},
    {id:3, nome:'ana', email:'ana@gmail.com'},
    {id:4, nome:'julia', email:'julia@gmail.com'}
]

const nome = usuarios.map(usuario => usuario.nome)
const email = usuarios.map(usuario => usuario.email)
console.log(nome)
console.log(email)

// Criando novo formato(desestruturação)
const lista = usuarios.map(({ id, nome }) => ({
    id, 
    usuario : nome
}))
console.log(lista)

// converter temperaturas (Celsius → Fahrenheit)
const celsius = [10,20,30,40]
const fahrenheit = celsius.map(c=>(c*9/5) + 32)
console.log(fahrenheit)

// Exemplo pratico no Node.js
// Dados vindos do banco de dados
const produtos = [
  { id: 1, nome: "Teclado", preco: 100 },
  { id: 2, nome: "Mouse", preco: 50 },
  { id: 3, nome: "Monitor", preco: 800 },
];

// Transformar para formato de resposta da API
const resposta = produtos.map(({ id, nome, preco }) => ({
  id,
  produto: nome,
  preco_com_imposto: preco * 1.2
}));

console.log(resposta);

// Formatação de Nomes 
const pessoas = [
    {nome:'Joaquim', apelido:'Eliseu'},
    {nome:'Ana', apelido:'Domingos'},
    {nome:'Noemia', apelido:'Erica'}
]
const nomesFormatados = pessoas.map(pessoa => `${pessoa.nome} ${pessoa.apelido}`)
// outra forma com desestruturacao
const nomesFormatados = pessoas.map((p = { nome, apelido }) => (`${p.nome} ${p.apelido}`))
console.log(nomesFormatados)

// Aninhamento de Arrays
const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const resultado = matriz.map(arrayInterno => arrayInterno.map(numero => numero * 2));

console.log(resultado); 