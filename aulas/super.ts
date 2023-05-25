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


    public MostraNomeCompleto(): string {
        return this.Nome + ' ' + this.Sobrenome + 'testesuper'
    }

}

const P1 = new Pessoa('Lucas', 'Oliveira', 45, '1212121212')

//console.log(P1.MostraNomeCompleto);

//Executando o motodo de herança:

export class Aluno extends Pessoa {
    //Se quiser passar construtor:

    constructor(
        Nome: string,
        Sobrenome: string,
        Idade: number,
        Cpf: string,
        public Sala: string //Atributo novo para Aluno
    ) { super(Nome, Sobrenome, Idade, Cpf) } //Passando os valores para a super classe


    public MostraNomeCompleto(): string {
        return super.MostraNomeCompleto(); //referencia ao metodo da classe pai
        //`Esse daqui vem de Aluno: ${this.Nome} ${this.Sobrenome}`
    }

}
export class Cliente extends Pessoa { }

const AL1 = new Aluno('Renato', 'Santos', 45, '4646464', 'A')
const CL1 = new Cliente('Augusto', 'Mendes', 30, '4546421')
console.log(AL1)
console.log(AL1.MostraNomeCompleto());