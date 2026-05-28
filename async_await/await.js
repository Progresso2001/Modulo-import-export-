import { SolicitarDados } from "./async.js";

SolicitarDados()
    .then(res=> res)
    .then(data=> console.log(data))
    .catch(e=>{
        if(e.message.includes('Unexpected')){
            console.log("Formato Json não valido: ", e.text)
        }else{
            console.error("Verificar a url: ", e.message)
        }
    })
    