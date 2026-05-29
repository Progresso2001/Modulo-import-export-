// Iterando usando o for tradicional
const nums = [1,2,3,4,5]
for(let i=0; nums.length > i ;i++){
    console.log("Numeros: ", nums[i])
}

// Iterando usando o forEach()
const nums = [1,2,3,4,5]
nums.forEach(n => console.log("Numero: ",n))

// usando indice
nums.forEach((numero, indice) =>{
    console.log(`Inidce: ${indice}, Valor: ${numero}`)
})

// usando com 3 parametros
nums.forEach((numero, indice, array)=>{
    console.log(numero, indice, array)
})

// Modificar elementos externos
const precos = [10, 20, 30]
const comImposto = []
precos.forEach((preco)=>{
    comImposto.push(preco*1.2) //Adiciona em outro array vazio
})
console.log("Novo array criado: ", comImposto)

// usando função e somar cada elemento 

let soma = 0
const nums = [10, 40, 53]
nums.forEach(myFunction)

function myFunction(item){
    soma+= item
    console.log(soma)
}

// usando função e multiplicacao cada elemento 

const nums = [2, 3, 4, 5]
nums.forEach(myFunction)

function myFunction(item, indice, array){
    array[indice]= item*2
    console.log(nums)
}

Exemplo
const numeros = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10]
let total=0
function somar(item, indice, array){
    total+=item
    array[indice]=total
}
numeros.forEach(somar);
console.log(numeros)

// Exemplos de forEach e funcao

let cores = ['verde', 'azul', 'branco']
function imprimirCores(item){
    console.log(item)
}
cores.forEach(imprimirCores)

// Retornando Array com valores de indice especifico

const marcas =['Fiat', 'Chevrolet', 'Ford', 'Volkswagen']
let marcasInicialComF=[]
let novoIndice = 0
function selecionarMarcas(item, indice){
    if(marcas[indice].indexOf('F') == 0){
        marcasInicialComF[novoIndice] = marcas[indice]
        novoIndice++;
    }
}
marcas.forEach(selecionarMarcas)
console.log("Marcas de carro com letra F: ", marcasInicialComF)

// Retornando array maiuscula

const nomes = ['alberto', 'diana', 'beatriz','joaquim']
function converterParaMaiuscula(item,indice){
    nomes[indice]=nomes[indice].toUpperCase(item)
}
nomes.forEach(converterParaMaiuscula)
console.log(nomes)

// Retornando maior (pelo indice)
const nomes = ["Alberto", "Diana", "Beatriz","Joaquim Eliseu"];
let tamanhoNome = 0;
let nome = "";

function maiorNome(item, indice){
    if(nomes[indice].length > tamanhoNome){
        nome = nomes[indice];
        tamanhoNome = nomes[indice].length;
    }
}
nomes.forEach(maiorNome)
console.log("Nome com maior indice: ", nome)

// forEach com objeto
const aluno ={
    nome: "Maria",
    idade: 25,
    curso: 'Ciencia da computaçãó'
}
// usando forEach para exibir propriedade do objecto
Object.keys(aluno).forEach(propriedade=>{
    console.log(`${propriedade}: ${aluno[propriedade]}`)
})
