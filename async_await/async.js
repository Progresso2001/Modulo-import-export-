export async  function SolicitarDados(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res=>res.json())
    return res
}