import Infor  from "./test.js";

const dadoPessoal = Infor.nome 
const verSkill = Infor.skills[0]
if(verSkill === undefined){
    console.log("Valor do indice nao existe")
}else{
    console.log("Tecnologia usada pela " +  Infor.nome  + ": " + verSkill)
}
const tipoProfissao = Infor.profissao
console.log(`${Infor.nome} trabalha como ${Infor.profissao}`)
// console.log(verSkill)
console.log(`Nome completo da profissional: ${Infor.nome} ${Infor.sobrenome}`)