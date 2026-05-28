// EXPORTAR FUNÇÕES ASSINCRONAS

export async function buscarDados() {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await resposta.json()
}

// Exportação nomeada
export async function salvarDados(dados) {
    await fetch('https://jsonplaceholder.typicode.com/', {
        method:'POST',
        bode:JSON.stringify(dados),
        headers:{
            'Content-Type': 'application/json'
        }
    })
}
// Exportação default

export default async function processarDados(dados) {
    return dados
}