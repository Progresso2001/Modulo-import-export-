// usando o metodo some

// verificar numero negativo
const valores = [10,30, -7]
const temNegativo = valores.some(u=>u<0)
console.log(temNegativo)

const temNumeroNegativo = valores.some(function(num){
    return num < 0 
})
console.log(temNumeroNegativo)

// verificar se ha estoque abaixo

const produtos = [
    {nome:'Teclado', estoque:50},
    {nome:'Mouse', estoque:5},
    {nome:'Notebook', estoque:40}
]
const verEstoque = produtos.some(function(produto){
    return produto.estoque < 6
})
console.log(verEstoque)

// verificar permissoes em arrays de string

const objectos = ['livro', 'mesa', 'cadeira']
const verObjecto = objectos.some(obj => obj === 'cadeira')
console.log(verObjecto)
const objectos = ['livro', 'mesa', 'cadeira']
const verObjecto = objectos.some(function(obj ){
    return obj === 'cadeira'
})
console.log(verObjecto)
