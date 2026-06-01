// usando o metodo every

// verificar se todos sao positivos
const valores = [10, 20, 60]
const valoresPositivos = valores.every(num => num >0)
console.log(valoresPositivos)

// validar campos de formularios preenchidos
const campo = [
    {nome:'ana', valor:'ana@gmail.com'},
    {nome:'senha', valor:'1234'},
    {nome:'pedro', valor:'pedro123@'},
    {nome:'password', valor:'1223345'}
]

const todosPreenchidos = campo.every(function(dados){
    return dados.valor.length > 0
})
console.log(todosPreenchidos)

// validar itens de estoque
const produto= [
    {nome:'fone',     quantidade:2, estoque: 10},
    {nome:'book',     quantidade:1 , estoque: 20},
    {nome:'livro',    quantidade:3, estoque: 5}
]
const prodFinalizado = produto.every(item => item.quantidade <= item.estoque )
console.log(prodFinalizado)