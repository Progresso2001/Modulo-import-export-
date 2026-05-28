async function carregarModulo() {
    // usando o top-level-await
    const  modulo = await import('./mathUtils.js')
    // A função default deve ficar em res.modulo
    const multiplicar = modulo.default

    // usar a funcao
    const resultado = multiplicar(3,2)
    console.log("Resultado da mult: ",resultado)

    // forma mais concisa
    const modulo = await import('./multiplica.js');
    const multiplica = modulo.default;
    console.log(multiplica(4, 7)); 
}
carregarModulo()

// usando try e catch 

async function resultadoSoma(){
     try{
        const { soma } = await import('./mathUtils.js')
        const resultado = soma(4, 5)
        console.log("Resultado da soma: ", resultado)
     }
     catch(e){
        console.error("Erro ao importar: ", e.message)
     }
}
resultadoSoma()

// Usando o top-level-await
const { soma } = await  import('./mathUtils.js')
console.log(soma(3, 5))
