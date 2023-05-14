//Utilizando arrays 

function multiplica(...x: number[]): void {
    let grava;

    grava = x.reduce((ac, val) => {
        ac *= val
        return ac
    }, 1)

    console.log(grava);
}

//multiplica(1, 2, 3, 4, 5);

function soma(...x: Array<number>): void {
    let grava;

    grava = x.reduce((ac, val) => {
        ac += val
        return ac
    }, 0)

    console.log(grava);
}

soma(1, 2, 3, 4, 5);

function maiu(...x: string[]): string[] {
    let teste = x.map((e) => e.toLocaleUpperCase())

    return teste
}

console.log(maiu('a', 'b'))