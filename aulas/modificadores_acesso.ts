//Protecd

export class Empresa {

    constructor(
        protected readonly Colaboradores: string[],
        //Somente pode ser chamada dentro da classe ou subclasses;
        public sexo?: string
    ) { }

    public popColaborador(): string | null {
        const Colaborador = this.Colaboradores.pop();
        if (Colaborador) return Colaborador
        return null
    }

}

const EP1 = new Empresa(['Lucas', 'João', 'Paulo']);
// console.log(EP1.popColaborador());
// console.log(EP1.popColaborador());
// console.log(EP1.popColaborador());
//console.log(EP1.popColaborador());
// console.log(EP1)

export class Filial extends Empresa {

    public teste(): void {
        console.log(super.popColaborador()) //Executa o metodo da super classe
    }
}

const FL1 = new Filial(['teste', 'test2'])
FL1.teste() //Teste2 apagado
console.log(FL1);