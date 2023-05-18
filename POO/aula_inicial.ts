//Abstração:


export class Pessoa {
    private nome: string
    private sobrenome: string

    constructor(nome: string, sobrenome: string) {
        this.nome = nome,
            this.sobrenome = sobrenome

    }


}


const pesso1 = new Pessoa('Lucas', 'Oliveira')

//console.log(pesso1)


//Encapsulamento: Oculta partes internas de um objeto
export class Controle {
    constructor(private powerStatus: boolean = false) { }


    public Poweron(): void {
        this.powerStatus = true
    }

    public PowerOff(): void {
        this.powerStatus = false
    }

    public PoweStatus(): boolean {
        return this.powerStatus
    }
}

const controle = new Controle
// controle.Poweron()
// console.log(controle.PoweStatus())

//Herança:

export abstract class Animal {
    constructor(public nome: string) { }
    abstract makenoise(): void;
}

class Dog extends Animal {
    makenoise(): void {
        console.log(this.nome)
    }
}

class cat extends Animal {
    makenoise(): void {
        console.log(this.nome)
    }
}

/*------------------------------------*/

//Polimorfismo: São metodos que executam de formas diferentes

export class Sounanimals {

    public sound(x: Animal): void {
        x.makenoise()
    }
}

const sons = new Sounanimals;
const dog = new Dog('cachorro')

sons.sound(dog)