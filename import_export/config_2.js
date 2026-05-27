// import solicitarDados,  { API_URL } from "./config.js";
// console.log(solicitarDados('joaquim@gmail.com'))
// console.log(API_URL)
// console.log(minhaApi())

import { minhaApi } from "./config.js";

minhaApi()
    .then(res=> res)
    .then(data=>console.log(data))
    .catch(e=>console.error('Error: ', e))

