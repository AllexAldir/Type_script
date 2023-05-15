enum Cores {
    Vermelho, //0
    Rosa, //1
    Azul //2
}

//console.log(Cores);


enum Core2 {
    Vermelho = 100, //0
    Rosa = 2, //1
    Azul = 450, //2
    Roxo = 'Roxo',
    Laranja = 23
}


//console.log(Core2.Roxo);

function passa(cor: Core2): void {
    console.log(Core2[cor])
}   

passa(450);