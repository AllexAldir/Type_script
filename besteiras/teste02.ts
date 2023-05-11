//class:
export { Pessoa } //Exportando pois ja existe em outra aplicação
class Pessoa {
    constructor(
        public nome: string = nome.replace(nome[0], nome[0].toUpperCase()),
        public _idade: number = _idade
    ) { }

    public get idade() {
        return this._idade
    }


    public set idade(x: number) {
        this._idade = x
    }


}

const ob = new Pessoa('lucas', 45);

//console.log(ob)

class Aluno extends Pessoa {
    Turma: number
    constructor(
        nome: string,
        _idade: number,
        turma: number
    ) {
        super(nome, _idade);
        this.Turma = turma

    }


}

const ob_aluno = new Aluno('lucas', 12, 7);
ob_aluno.idade = 89
//console.log(ob_aluno);


/*-------------------------------------------*/

class Carro {
    constructor(
        protected Marca: string = Marca,
        protected Ano: number = Ano,
        public Cor: string = Cor,
        public Valor: number = Valor
    ) { }

    aumento_valor(x: number): void {
        this.Valor = this.Valor + ((this.Valor * x) / 100)
    }

    desconto_valor(x: number): void {
        this.Valor = this.Valor - ((this.Valor * x) / 100)
    }


}

const carro1 = new Carro('Fiat', 2010, 'preto',80000)
carro1.aumento_valor(10)
console.log(carro1);

