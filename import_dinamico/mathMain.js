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

// usando o .then  
import('./mathUtils.js')
  .then(modulo => {
    // Para export nomeado, a função está em modulo.soma
    const resultado = modulo.soma(5, 3);
    console.log(resultado); // 8
  })
  .catch(erro => {
    console.error('Erro ao carregar módulo:', erro);
  });



// Usando o top-level-await
const { soma } = await  import('./mathUtils.js')
console.log(soma(3, 5))

// Alternativa com .then
import('./mathUtils.js').then(modulo => {
  const multiplica = modulo.default;
  console.log(multiplica(2, 6)); // 12
});
