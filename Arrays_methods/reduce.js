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

// Filtar uma condição usando reduce()

const pessoas =[
    {nome:'Ana', idade:16},
    {nome:'Pedro', idade:26},
    {nome:'Lian', idade:19},
    {nome:'joaquim', idade:20}
]
const adultos = pessoas.reduce((acc, adultosAtual)=>{
    if(adultosAtual.idade >= 18){
        acc.push(adultosAtual)
    }
    return acc
}, [])
console.log(adultos)

// transformar um array em outro tipo de estrutura de dados

const colors = ['red', 'green', 'blue'];
  const hexCodes = colors.reduce((acc, curr) => {
  switch (curr) {
          case 'red':
          acc[curr] = '#FF0000';
          break;
          case 'green':
          acc[curr] = '#00FF00';
          break;
          case 'blue':
          acc[curr] = '#0000FF';
          break;
      }
  return acc;
  }, {});
  
  console.log(hexCodes);

// Exemplos basico
const valores = [1, 3, 5, 6]
const valorIncial = 2

const resSoma = valores.reduce((acc, curr) =>{
    return acc + curr
}, valorIncial)
console.log(resSoma)