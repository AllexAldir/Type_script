export { teste2 }
const t1: [number, string] = [1, 'ok1']
const t2: [number, string?] = [1, 'ok2']
const t3: [number, string] = [1, 'ok3']

//Pode-se alterar os valores:

t1[0] = 5

// console.log(t1)

const teste2: [number, string, ...string[]] = [1, 'Teste'] //O restante será strings
//Arrays imutaveis:

const teste3: readonly [number, string] = [1, 'ok3'] //Não poderá alterar o valor!
console.log(teste3)