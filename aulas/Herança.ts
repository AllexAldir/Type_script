export class Pessoa {
    constructor(
        public Nome: string,
        public Sobrenome: string,
        private Idade: number,
        protected Cpf: string
    ) { }


    public get MostraIdade(): number {
        return this.Idade
    }

    public get MostraCPF(): string {
        return this.Cpf
    }


    public get MostraNomeCompleto(): string {
        return this.Nome + ' ' + this.Sobrenome
    }

}

const P1 = new Pessoa('Lucas', 'Oliveira', 45, '1212121212')

//console.log(P1.MostraNomeCompleto);

//Executando o motodo de herança:

export class Aluno extends Pessoa {
    public get MostraNomeCompleto(): string {
        return `Esse daqui vem de Aluno: ${this.Nome} ${this.Sobrenome}`
    }

}
export class Cliente extends Pessoa { }

const AL1 = new Aluno('Renato', 'Santos', 45, '4646464')
const CL1 = new Cliente('Augusto', 'Mendes', 30, '4546421')

console.log(AL1.MostraNomeCompleto);