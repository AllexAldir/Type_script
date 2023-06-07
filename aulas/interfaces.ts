interface GeralNome {
    nome: string,
    sobrenome: string

}

export class Pessoa implements GeralNome {
    constructor(
        public nome: string,
        public sobrenome: string,
        public idadeMenor: number,
        public idadeMaior: number
    ) { }


}

type idade = {
    idadeMenor: number,
    idadeMaior: number
}

interface GeralNome extends idade { }

const P1 = new Pessoa('Teste', 'Teste campos', 5, 8);

console.log(P1);

