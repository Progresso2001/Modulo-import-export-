const nums = [1,2,3,4,5]
const soma = nums.reduce((acumulador, valorAtual)=>{
    return acumulador + valorAtual
}, 0)
console.log("Valor reduzido da soma: ", soma)