// export class User{
//     constructor(first, last){
//         this.first=first
//         this.last=last
//     }
// }

// // usando default
// export default class User{
//     constructor(first, last){
//         this.first=first
//         this.last=last
//     }
// }

// Alternativa: Exportar no final do arquivo:

class Pessoa{
    constructor(nome, sobrenome, idade){
        this.nome=nome
        this.sobrenome=sobrenome
        this.idade=idade

    }
    // usando um metodo
    falar() {
        console.log(`Nome: ${this.nome} ${this.sobrenome}, Idade: ${this.idade}`);
    }
}
export { Pessoa }

