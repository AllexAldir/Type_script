export class Carro {
    private readonly Montor = new Motor();


    get teste(): void {
        return this.Montor.acelerar()
    }
}

export class Motor {
    ligar(): void {
        console.log('O motor está ligado')
    }

    acelerar(): void {
        console.log('O Carro está em movimento')
    }

    desligar(): void {
        console.log('O Carro está desligado')
    }
}

const C1 = new Carro()
C1.teste