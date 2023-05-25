export class Pessoa {
    constructor(
        protected Nome: string,
        public Idade: number,
        public Sexo?: string
    ) { }

    get nome(): string {
        return this.Nome
    }
}

export class Aluno extends Pessoa {

}

const AL1 = new Aluno('Lucas', 56, 'M')