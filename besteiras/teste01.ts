type Pt = 'Maior 18' | 'Menor 18'; //Informando o tipo

const ob_pessoa: { nome: string, status?: Pt, profissao: string } = {
    nome: 'Lucas',
    status: "Menor 18",
    profissao: 'teste'
}


// ob_pessoa.profissao = 'Dev'

// console.log(ob_pessoa);

const num: () => number = () => Math.round(Math.random() * (100 - 1) + 1)

let array_NUmber: number[] = [];

while (array_NUmber.length < 100) {
    array_NUmber.push(num())
}

console.log(array_NUmber);