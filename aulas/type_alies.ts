type TPessoa = {
    nome: string;
    sobrenome: string;
    nomeCompleto(): void;

}

type TPessoa2 = {
    nome: string;
    sobrenome: string;
    nomeCompleto(): void;

}

class Pessoa implements TPessoa, TPessoa2 { //pode implementar any tipos quiser
    constructor(
        public nome: string,
        public sobrenome: string
    ) { }

    nomeCompleto(): void {
        console.log(`Esse é o nome: ${this.nome} ${this.sobrenome}`);
    }
}


const P1 = new Pessoa('Teste', 'Oliveira');
P1.nomeCompleto()