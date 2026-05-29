const nums = [1,2,3,4,5]
const par = nums.filter(n=>n % 2 === 0)
console.log(par)

// Filtrar objectos
const pessoas = [
    {id: 1, nome:'Joaquim', apelido:'Eliseu', ativo: true},
    {id: 2, nome:'Ana', apelido:'Domingos'  , ativo: false},
    {id: 3, nome:'Noemia', apelido:'Erica'  , ativo: true}
]
const usuariosAtivos = pessoas.filter(function(pessoa){
    // return pessoa.ativo === true
    //usando o if 
    if(pessoa.ativo === true){
        console.log('Dados ativos: ', pessoa)
    }
})
console.log(usuariosAtivos)

// filtrar por faixa de valor

const precos = [10, 25, 50, 90, 100, 150]
const barato = precos.filter(preco=>preco < 50)
const caro = precos.filter(preco=>preco >= 90)
console.log(barato)
console.log(caro)

// usando filter e map

const produtos = [
  { nome: "Teclado", preco: 100, estoque: 5 },
  { nome: "Mouse", preco: 50, estoque: 0 },
  { nome: "Monitor", preco: 800, estoque: 3 },
  { nome: "Cadeira", preco: 400, estoque: 0 },
];

const disponiveis = produtos
    .filter(p=>p.estoque > 0 )
    .map(({ nome, preco}) => ({nome, preco}))
console.log(disponiveis)

// Procurando em um array(baseando em criterio de busca)
var fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItem(query){
    return fruits.filter(function(el){
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1
    })
}
console.log(filterItem('ap'))
console.log(filterItem('an'))

// outra forma de busca
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

// Array filters items based on search criteria (query)
 
const filterItems = (query) => {
  return fruits.filter(
    (el) => el.toLowerCase().indexOf(query.toLowerCase()) > -1,
  );
};

console.log(filterItems("ap")); 
console.log(filterItems("an"));

// Filtragem exemplos praticos
var produtos = [
    {id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
    {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
    {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
    {id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"},
    {id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"}
]
function retornaEletronico (value){
    if (value.categoria == "Eletrônico")
    return value;
}
var produtosEletronico = produtos.filter(retornaEletronico);
produtosEletronico.forEach(produtoEletro => { 
    console.log(produtoEletro);
})
