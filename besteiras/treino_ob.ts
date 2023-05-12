export { Pessoa }
const ob_pessoa: Record<string, unknown> = {
    chave1: 'Teste1',
    chave2: 'Teste2',
    chave3: 'Teste3',

}

//console.log(ob_pessoa);

const ob_teste: {
    idade: number,
    nome: string,
    sexo?: string,
    [key: string]: unknown;
} = {
    idade: 45,
    nome: 'Lucas'

}

//console.log(ob_teste);

/*-------------------------------------*/

class Pessoa {
    constructor(
        protected readonly Nome: string,
        protected readonly Idade: number,
        public readonly Sexo?: string,
        public Valores_mes: any[] = []
    ) { }


}

const ob_p1 = new Pessoa('Lucas', 26, 'm',
    [
        { janeiro: 450 },
        { fevereiro: 550 },
        { marco: 550 },
        { abril: 550 },
        { maio: 550 },
        { junho: 550 }

    ]
)

let meses = ob_p1.Valores_mes
let meses_ = [
    'janeiro',
    'fevereiro',
    'marco',
    'abril',
    'maio',
    'junho',

]

// meses.forEach((e, i) => {
//     console.log(`Indice: ${i} Valor: ${e[meses_[i]]}`);
// });

class Aluno extends Pessoa {
    constructor(
        protected readonly Nome: string,
        protected readonly Idade: number,
        public Sexo?: any,
        public Valores_mes: any[] = [],
        public Turma?: number
    ) { super(Nome, Idade, Sexo, Valores_mes) }

    set sexo(x: any) {
        this.Sexo = x
        
    }

    get sexo(): any {
        return console.log(`Valor do atributo sexo modificado!: ${this.Sexo}`)
    }
}

const Al01 = new Aluno('Claudio', 15, undefined, [
    { janeiro: 450 },
    { fevereiro: 550 },
    { marco: 550 },
    { abril: 550 },
    { maio: 550 },
    { junho: 550 }

], 8)
Al01.sexo = 'm'

