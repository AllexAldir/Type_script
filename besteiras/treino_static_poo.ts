export class Teste {
    constructor(
        private Nome: string,
        private Idade: number
    ) { }

    static Nome_ = 'Teste'
    static Idade_ = '00'

    static sayName(): void {
        console.log(Teste.Nome_)
    }
}

Teste.sayName();