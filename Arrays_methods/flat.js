// 1. Aplanar 1 nível (padrão)
const arr = [1, [2, 3], [4, [5, 6]]];
const plano = arr.flat();

console.log(plano);

// 2. Aplanar 2 nível (padrão)
const arr = [1, [2, 3], [4, [5, 6]]];
const plano = arr.flat(2);

// console.log(plano);

// 3. Aplanar nível infinity
const arr = [1, [2, 3], [4, [5, 6]]];
const plano = arr.flat(Infinity);

console.log(plano);
