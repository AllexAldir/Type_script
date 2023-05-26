//Metodo antigo

export class Pessoa {

    static idadePadrao = '00';
    static cpfPadrao = '46456646'



    constructor(
        public Nome: string,
        public Idade: number,
        public CPF?: string
    ) { }

    static sayName(Nome: string, Idade: number): Pessoa {
        return new Pessoa(Nome, Idade, Pessoa.cpfPadrao) //Retorna um objeto pessoa estatico
    }
}

const P1 = new Pessoa('Teste', 45)
console.log(Pessoa.sayName('Fernando', 56));