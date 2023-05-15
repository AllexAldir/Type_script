//Não retorna nada

function criaErro(): never { //Nunca irá retorna nada
    throw new Error('Ok teste de erro')
}

criaErro();