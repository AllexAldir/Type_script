//import { pessoa } from "./intersection_types"

export class Pessoa {
    constructor(
        private Nome: string,
        public Idade: number,
        public Salario: number,

    ) { }

    reajustesSal(x: number): void {
        this.Salario = this.Salario + (this.Salario * (x / 100))
    } //Esse metodo é publico

    verName(): void {
        console.log(this.Nome)
    }//Caso queira acessar um atributo privado basta criar um metodo publico 
}

const P1 = new Pessoa('Lucas', 55, 1200)

P1.reajustesSal(10)

P1.verName()