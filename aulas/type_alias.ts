//Atribui um apelido para o tipo
export { Pessoa }

type Idade = number; //=> atribuindo um apelido

//Exemplo de union Types:

type Corprefe = 'verde' | 'Azul' | 'Rosa'

type Corpref = 'vermelho' | 'marrom' | 'roxo'

type CorTotal = Corpref | Corprefe

type Pessoa = {
    Idade: Idade,
    Nome: string,
    CorPrefe?: CorTotal
}; //=> atribuindo um apelido

const pessoa: Pessoa = {
    Idade: 45,
    Nome: 'Lucas',
    CorPrefe: "verde"
}

export function Dados(x: Pessoa, y: CorTotal): Pessoa {
    return { ...x, CorPrefe: y } // Cria um novo objeto
}

// console.log(Dados(pessoa, 'vermelho'));

