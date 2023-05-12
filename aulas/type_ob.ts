export { ob1 }


//Type object

const ob1: Record<string, unknown> = {
    chave1: 'Valor1',
    chave2: 'Valor2'
}

//Utilizando uma index signature:

const ob02: {
    readonly chave01: string, //Não posso alterar o valor dessa chave
    chave02: string,
    chave03?: string,
    [key: string]: unknown; //Valor não se sabe
} = {
    chave01: 'ok',
    chave02: 'teste',
    chave03: 'ok'
}
ob02.chave04 = 'Teste04'

console.log(ob02);

