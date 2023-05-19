export class Brinquedo {
    public Modelo: string
    public Preco: number
    public Cor: string
    public Sound: string

    constructor(Modelo: string, Preco: number, Cor: string, Sound: string) {
        this.Modelo = Modelo
        this.Preco = Preco
        this.Cor = Cor
        this.Sound = Sound
    }

    public SoundAnimals(): void {
        console.log(`Teste com esse animal: ${this.Sound}`)
    }


}


export class Urso extends Brinquedo {

    constructor(Modelo: string, Preco: number, Cor: string, Sound: string) {
        super(Modelo, Preco, Cor, Sound)
        this.Sound = Sound
    }

}

export class Coelho extends Brinquedo {

    constructor(Modelo: string, Preco: number, Cor: string, Sound: string) {
        super(Modelo, Preco, Cor, Sound)
        this.Sound = Sound
    }

}

export class SoundAnimal {

    public Som(x: Brinquedo): void {
        x.SoundAnimals()
    }
}

const urso1 = new Urso('Ted', 45, 'Vermelho', 'uuuu')
const coelho1 = new Urso('Jota', 45, 'Vermelho', 'testeeee')

const ob01 = new SoundAnimal()
ob01.Som(urso1)
ob01.Som(coelho1)