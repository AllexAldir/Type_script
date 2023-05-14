const ob: {
    teste1: string,
    teste2: string,
    teste3: string,
    [key: string]: any
} = {
    teste1: 'ok',
    teste2: 'ok',
    teste3: 'ok',
}


ob.teste4 = [1, 2, 3, 4]


console.log(ob.teste4)