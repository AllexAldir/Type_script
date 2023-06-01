//Treinando classes abstratas...

export abstract class Game {
    constructor(
        protected Personagem: string,
        protected Ataque: number,
        protected Vida: number,
        protected Especial: string
    ) { }

    ataque(x: Game): void {
        x.perdeVida(this.Ataque); //Aqui passa o valor do objeto que chamou o metodo ataque
    }

    perdeVida(x: number): string | void {
        this.Vida -= x
        if (this.Vida < 0) return console.log('Morreu')
        console.log(`A vida do persongem ${this.Personagem} é: ${this.Vida}`)
    }

    ataqueEspecial(x: Game): void {
        let foraEspecial = this.Especial.length
        x.Vida -= foraEspecial * x.Vida
    }

}

export class CDZ extends Game { }
//export class Mario extends Game { }

const ZD = new CDZ('Muh', 4500, 3200, 'Muralha de cristal')
const ZD2 = new CDZ('Phoenix', 1200, 800, 'Fantasma Phoenix')

ZD.ataque(ZD2)