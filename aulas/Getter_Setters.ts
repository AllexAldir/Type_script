//Metodo antigo

export class Pessoa {
    constructor(
        private Nome: string,
        private Idade: number,
        private CPF: string
    ) { }

    getNome(): void {
        console.log(this.Nome)
    }

    setNome(x: string): void {
        this.Nome = x
    }
}


//Metodo autal

export class Aluno {
    constructor(
        private Nome: string,
        private Idade: number,
        private _CPF: string
    ) { }


    get CPF(): string {
        return this._CPF
    }

    set CPF(x: string) {
        this._CPF = x;
    }
}

const AL1 = new Aluno('Lucas', 25, '2345678')
AL1.CPF = '6767677676'
console.log(AL1.CPF)    