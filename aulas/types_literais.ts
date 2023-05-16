//Só poderá conter 1 tipo


const ob = {
    nome: 'Teste' as const, //só poderá conter esse tipo de valor,
    idade: 25 as const
}

function Cores(x: 'vinicius' | 'azul' | 'amarelo'): any { //Nesse caso possui 3 tipos: ('vermelho','azul','amarelo')
    return x
}

console.log(Cores('vinicius'))