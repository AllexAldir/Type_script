class Item {
    readonly Item: string
    Valor: number

    constructor(
        Item: string,
        Valor: number,

    ) { this.Item = Item, this.Valor = Valor }


    public aumento(pocertagem: number) {
        this.Valor = this.Valor + (((pocertagem / 100)) * this.Valor)
    }

    public diminuir(pocertagem: number) {
        this.Valor = this.Valor - (((pocertagem / 100)) * this.Valor)
    }


}

const it01 = new Item('carne', 24)
it01.aumento(10)

console.log(it01);