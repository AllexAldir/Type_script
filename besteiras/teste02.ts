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

console.log(ob)