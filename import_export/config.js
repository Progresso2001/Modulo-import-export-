// export const API_URL = 'https://exemplo.com'
// export default function solicitarDados(email){
//     return `Seu email solicitado: ${email}`;
// }

// usando fetch api
export function minhaApi(){
    return  fetch('https:jsonplaceholder.typicode.com/posts/1')
    .then(res=> res.json())
    
}

    