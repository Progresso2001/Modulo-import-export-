// usando o includes

const zooAnimals = ['lion', 'tiger', 'snake', 'zebra']
const temZebra = zooAnimals.includes('zebra')
console.log(temZebra)
// usando o if
if(zooAnimals.includes('zebra')){
    console.log("Contém animal: ", zooAnimals[7])
}

// usando metodo push -> Adicionar
const inserAnimal = zooAnimals.push('monkey')
console.log(inserAnimal)
console.log("Animal adicionado: ", zooAnimals[4])

// usando o pop() -> remover
const removerAnimal = zooAnimals.pop('monkey') // ou .pop[4] -> usando o indice
// console.log(inserAnimal)
console.log("Animal removido: ", zooAnimals)

// usando unshift -> Adicionar no inicio
const inserAnimalNoInicio = zooAnimals.unshift('monkey')
console.log("Animal adicionado no inicio: ", zooAnimals)

// usando o shift -> remover no inicio
const removerAnimalNoInicio = zooAnimals.shift()
console.log("Animal removido no inicio: ", zooAnimals)

// usando o splice -> remover ou adicionar em qualquer posicao
const removerAnimalEmQualquerPosicao = zooAnimals.splice(1, 2)
console.log("Animal removido: ", removerAnimalEmQualquerPosicao)
console.log("Array original reduzido: ", zooAnimals)

Adicionar
const AdicionarAnimalSemSubstituir= zooAnimals.splice(1, 0, 'corcodile', 'vaca', 'cavalo')
console.log("Animal adicionado na posicao 1: ", zooAnimals)

substituir
const cores = ["Vermelho", "Verde", "Azul"];
const removidos = cores.splice(1, 1, "Amarelo");

console.log(cores);      
console.log(removidos);   

// Preencher todo array
const zooAnimals = ['lion', 'tiger', 'snake', 'zebra']
zooAnimals.fill('avestruz')
console.log(zooAnimals)

// Preencher array com indice especifico
const zooAnimals = ['lion', 'tiger', 'snake', 'zebra']
const preencherPorIndice = zooAnimals.fill('avestruz', 2) //começa apartir da posicao 2 em diante
console.log(preencherPorIndice)

//  Preencher um intervalo específico
const zooAnimals = ['lion', 'tiger', 'snake', 'zebra']
const preencherInterEspecifico = zooAnimals.fill('avestruz',1, 3) //indice 1, 2 (3 nao incluido)
console.log(preencherInterEspecifico)

// Usando índices negativos
const zooAnimals = ['lion', 'tiger', 'snake', 'zebra']
const preencherInterEspecifico = zooAnimals.fill('avestruz',0, -2) //comeca 2 poisoes antes do fim
console.log(preencherInterEspecifico)
