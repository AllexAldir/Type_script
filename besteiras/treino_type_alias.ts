export { pessoa }

type sexo = 'm' | 'f'

type pessoa = {
    nome: string,
    sobrenome: string,
    idade: number,
    sexo?: sexo
}

export function Dados(x: pessoa): void {
    console.log(x.sexo)
}

// Dados({ nome: 'Lucas', sobrenome: 'oliveira',
// idade: 45});

const pessoa2: pessoa = {
    nome: 'Edaauardo',
    idade: 45,
    sobrenome: 'teste'
}

console.log(pessoa2);