export const nome = "joaquim"
export const soma = (a,b) => a + b;
export const PI = 3.14157
export const saudar = 'joaquim'

// exportar tudo no final do arquivo:
const soma = (a, b) => a + b;
const subtrai = (a, b) => a - b;

export { soma, subtrai };

// usando funcao

export function multiplicar(a,b){
    return a*b
}

export default (a, b) => a*b

const mensage = () =>{
    const nome= "DevJocas"
    const idade=67
    const profisao = "Programador"
    const estudar = "JavaScript"
    return `Eu sou o ${nome} estou estudando o  ${estudar}`

}
export default mensage;

