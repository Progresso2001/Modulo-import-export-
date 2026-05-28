import processarDados, { buscarDados, salvarDados } from "./utils.js";

// criar uma nova função 

async function iniciar() {
    try{
        const dados = await buscarDados();
        const processar = await processarDados({
            id:1,
            title:'joaquim',
            body:"study javascript"
        })
        await salvarDados(processar)
        console.log('Concluido')
    }
    catch(e){
        console.log("Erro: ", e.message)
    }
}
iniciar()