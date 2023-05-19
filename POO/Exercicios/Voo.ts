export class Data {
    Data: any
    constructor(Data: any) { this.Data = Data }

    verificaData(x: Data): any | number {
        if (this.Data === x.Data) {
            return 0
        }

        console.log(new Date())
    }


    public get retornaDia(): string {
        return this.Data.slice(0, 2)
    }

    public get retornaMesExtenso(): any {
        let array_mes = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril',
            'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
            'Outubro', 'Novembro', 'Dezembro'
        ]

        let mes = this.Data.slice(3, 5)
        if (mes[0] === 0) delete mes[0]

        return array_mes[Number(mes) - 1]
    }

    public get retornaMes(): string {
        return this.Data.slice(3, 5)
    }

    public get retornaAno(): string {
        return this.Data.slice(6, 10)
    }


}

const d1 = new Data('19/05/2023')
const d2 = new Data('19/05/2023')

//console.log(d1.retornaAno)


/*---------------------------------------*/

// Escreva uma classe em que cada objeto representa um vôo que acontece em determinada data e em
// determinado horário. 


export class Voo {

    obVagas(): any {
        let arrayNumberss = Array.from(Array(100 + 1).keys()).slice(1)
        const assentos = arrayNumberss.reduce((ac: any, val: number) => {
            ac[val] = false

            return ac
        }, {})

        return assentos
    }

    constructor(public Numero_Voo: number, public Data: Data) { }

    proximoLivre(): void {
        const obAssentos = this.obVagas();

        for (let i of Object.entries(obAssentos)) {

            if (i[1] === false) {
                return console.log(`Assento é: ${i[0]}`)
            }

        }

    }

    verifica(x: number): void {

        const assentos = Object.entries(this.obVagas())

        if (assentos[x][1] === true) return console.log('O lugar está ocupado!')

        console.log('O lugar não está ocupado')
    }

    vagasDisponiveis(): any {
        const assentos = Object.entries(this.obVagas())

        let disponiveis = assentos.filter((e: any) => e[1] === false)

        for (let i of disponiveis) {

            console.log(i[0])
        }
    }

    getVoo(): number {
        return this.Numero_Voo
    }

    getData(): Data {
        return this.Data
    }

    setAssento(x: number): void {
        let num = x - 1
        const assentos = Object.entries(this.obVagas())

        if (assentos[num][1] === true) return console.log('O lugar está ocupado!')

        assentos[x][1] = true
        console.log(`Lugar preenchido ${assentos[x][1]}`)
    }


}

const Voo1 = new Voo(1111, d1)

Voo1.setAssento(3)
Voo1.setAssento(3)