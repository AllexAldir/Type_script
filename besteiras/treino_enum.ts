enum Carro {
    Agrale,
    Aston_Martin,
    Audi,
    BMW,
    BYD,
    CAOA_Chery,
    Chevrolet,
    Citroën,
}

function nomesCarros(): void {

    for (let i of Object.entries(Carro)) {
        console.log(i)
        //if (i[0].length > 1) console.log(i)
    }


}

console.log(nomesCarros())