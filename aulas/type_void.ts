//Tipo void: não retorna nada

const pessoa = {
    nome: 'Lucas',
    idade: 45,

    sayname(): void {
        console.log(this.nome + ' ' + this.idade)
    }
}

pessoa.sayname()

function teste(...x: string[]): void {
    console.log(x)
}

teste('ok', 'teste')