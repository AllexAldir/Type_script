//Criando classes com typescript

export class Empresa {

    public readonly Nome: string //readonly não poderá ser alterado dps de ser inicializado!
    private readonly Colaboradores: Colaboradores[] = []
    protected readonly CNPJ: string

    constructor(Nome: string, CNPJ: string) {
        this.Nome = Nome
        this.CNPJ = CNPJ
    }

    AdcicionaColaborador(x: Colaboradores): void {
        this.Colaboradores.push(x)
        //console.log(this.Colaboradores);
    }
}

export class Colaboradores {
    constructor(readonly Nome: string, readonly Sobrenome: string) { }

} //classes poderam servir como tipo para os atributos

const Cola1 = new Colaboradores('Lucas', 'Oliveira')
const Cola2 = new Colaboradores('Geraldo', 'Santos')


const Empresa1 = new Empresa('Facebook', '11.111.111/0001-11')
Empresa1.AdcicionaColaborador(Cola1)
Empresa1.AdcicionaColaborador(Cola2)