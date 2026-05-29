const nums = [1,2,3,4,5]
const soma = nums.reduce((acumulador, valorAtual)=>{
    return acumulador + valorAtual
}, 0)
console.log("Valor reduzido da soma: ", soma)

//  Agrupar objetos em um objeto (útil em APIs)

const produtos = [
    {nome:'Teclado', categoria: 'periferico', preco:100},
    {nome:'Monitor', categoria: 'periferico', preco:50},
    {nome:'Mouse', categoria: 'mouse', preco:700},
    {nome:'Notebook', categoria: 'pc', preco:800},
    {nome:'Iphone', categoria: 'fone', preco:1900}
]

const porCategoria = produtos.reduce((acc, produto)=>{
    const novaCategoria = produto.categoria;
    if(!acc[novaCategoria]){
        acc[novaCategoria] = []
    };
    acc[novaCategoria].push(produto);
    return acc
}, {})
console.log("Nova categoria selecionada: ", porCategoria)
