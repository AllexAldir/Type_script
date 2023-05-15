export function Nome(fisrtname: string, lastname?: string): { fisrtname: string, lastname?: string } {
    return {
        fisrtname,
        lastname
    }
}

//console.log(Nome('test1', 'sobrenome2'))

//Checando uma função verificando o tipo dela

function teste_valor(x: any) {
    if (typeof x === 'number') return x * x
    return null;
}

console.log(teste_valor(2))
console.log(teste_valor('ok')) 