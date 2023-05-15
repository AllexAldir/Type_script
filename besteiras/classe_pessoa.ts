export { Pessoa }

class Pessoa {

    constructor(readonly nome: string, readonly idade: number) { }


}

console.log(new Pessoa('teste', 56))