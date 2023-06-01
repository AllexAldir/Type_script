export abstract class Personagem { //Somente um contrato para as subclasses
    protected abstract emoji: string
    constructor(
        protected Nome: string,
        protected Ataque: number,
        protected Vida: number
    ) { }

    atacar(x: Personagem): void {
        this.bordao()
        x.perderVida(this.Ataque);
    }

    perderVida(x: number): void {
        console.log(`${this.Nome} está recebendo o ataque`)
        this.Vida -= x
        console.log(`Agora esse personagem (${this.Nome}) está ${this.Vida}`)
    }

    abstract bordao(): void
}

export class Guerreiro1 extends Personagem {
    protected emoji = '\u{1F9DF}'

    bordao(): void {
        console.log(this.emoji + 'Ataque Guerreiro!')
    }
}
export class Mago extends Personagem {
    protected emoji = '\u{1F9DF}'

    bordao(): void {
        console.log(this.emoji + 'Ataque Mago!')
    }
}

const GUE = new Guerreiro1('Zelda', 1500, 800)
const MAG = new Mago('Paladino', 2000, 600)

MAG.atacar(GUE)
