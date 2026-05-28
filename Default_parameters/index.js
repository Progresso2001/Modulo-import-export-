// Default parameters
function sum(a=4, b=7){
    const resultadoSum = a+b
    console.log("Resultaado da soma: ", resultadoSum)
}
sum()

function saudar(nome='joaquim'){
    const saudacao = nome
    console.log(`Boa tarde senhor ${saudacao}`)
}
saudar()

function soma(a = 0, b = a) {
  return a + b;
}
console.log(soma(4))
console.log(soma(5, 4))

// desestruturação

function criarUser({ nome="Ana", idade=34 } = {}){
    return { nome, idade }
}
console.log(criarUser())
console.log(criarUser(nome="Ana"))




