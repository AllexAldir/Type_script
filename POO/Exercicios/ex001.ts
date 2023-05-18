export class Pessoa {
    protected Nome: string
    public Idade: number
    public Sexo: string | undefined

    constructor(Nome: string, Idade: number, Sexo?: string) {
        this.Nome = Nome,
            this.Idade = Idade,
            this.Sexo = Sexo

    }
}

const P1 = new Pessoa('Teste', 45)

//console.log(P1)

export class Veiculos {
    public Marca: string
    public Ano: number
    public Modelo: string
    public Preco: number

    constructor(Marca: string, Ano: number, Modelo: string, Preco: number) {
        this.Marca = Marca
        this.Ano = Ano
        this.Modelo = Modelo
        this.Preco = Preco
    }

    public aumentaPreco(x: number): void {
        this.Preco = this.Preco + (this.Preco * (x / 100));
    }

    public diminuiPreco(x: number): void {
        this.Preco = this.Preco - (this.Preco * (x / 100));
    }

}

const Car1 = new Veiculos('Renault', 2010, 'sandeiro', 25000)
console.log(Car1);

export class Moto extends Veiculos {
    constructor(Marca: string, Ano: number, Modelo: string, Preco: number) {
        super(Marca, Ano, Modelo, Preco) //Executando a herança
    }


    public modeloMoto(x: string): void {
        this.Modelo = x
    }
}

const moto1 = new Moto('honda', 2005, 'Fan', 5000)
moto1.aumentaPreco(10)
console.log(moto1);

