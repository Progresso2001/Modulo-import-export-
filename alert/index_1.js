import { clientDados } from './index.js'

const resClientes = clientDados.nome 
const prodComprados = clientDados.produtos_comprado[6]
console.log("Nome cliente: ", resClientes)

// tratamento de erro com indice invaalido
if(prodComprados === undefined){
    console.log("Verificar o indice")
}else{
console.log("Produto comprado: ", prodComprados)
}







// console.log("Nome do cliente: ", clientDados.nome)
// console.log("Produtos comprados: ", clientDados.produtos_comprado[0])

