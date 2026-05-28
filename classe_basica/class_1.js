import { User } from "./class.js";
const user = new User('Ana', 'Pedro')
console.log(`Olá chamo-me ${user.first} ${user.last} `)

// // Usando default
import { default  as User } from "./class.js"

const nomePadrao = new User('Ana', 'Pedro')
console.log(nomePadrao)
console.log(`Olá chamo-me ${nomePadrao.first} ${nomePadrao.last} `)

// usando a exportação no final E chamar o metodo
import { Pessoa } from "./class.js";
const pessoa = new Pessoa('Ana', 'Pedro', 13)
pessoa.falar()