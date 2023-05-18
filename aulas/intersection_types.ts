//Funciona como um and
export { pessoa }
type nome = { nome: string }
type idade = { idade: number }
type sexo = { sexo: string }

type geral = nome & idade & sexo

const pessoa: geral = {
    nome: 'teste',
    idade: 45,
    sexo: 'M'
}

type AB = 'A' | 'B'
type Ac = 'A' | 'c'
type inter = AB & Ac //Interseção de tipos

console.log(pessoa)