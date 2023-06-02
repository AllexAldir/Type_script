//Criando classes abstratas:
export class Escritor {
    private _ferramenrta: Ferramenta | null = null

    constructor(private _nome: string) { }

    get nome(): string {
        return this._nome
    }

    set ferramenta(ferramenta: Ferramenta) {
        this._ferramenrta = ferramenta
    }

    get ferrementa(): Ferramenta | null {
        return this._ferramenrta
    }

    escrever(): void {
        if (this._ferramenrta === null) {
            console.log('Não tem ferramenta')
            return
        }

        //this.ferramenta.escrever();

        console.log(this._ferramenrta)
    }
}


export abstract class Ferramenta {
    constructor(private _nome: string) { }
    abstract escrever(): void;

    get nome(): string {
        return this._nome
    }
}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`Está escrevendo... ${this.nome}`)
    }
}

export class MAquinaEscrever extends Ferramenta {
    escrever(): void {
        console.log(`Está escrevendo... ${this.nome}`)
    }
}

const CN = new Caneta('bic')
const MAQ = new MAquinaEscrever('singer')
const ESC = new Escritor('Carlos')

ESC.ferramenta = MAQ
console.log(ESC.ferrementa)
ESC.escrever()