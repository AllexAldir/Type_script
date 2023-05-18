//utilizando callback functions

type Maiusculo = (x: string) => string // criando um tipo q retorna uma string

function callBack(x: string[], callback: Maiusculo): string[] {
    const NewArray = x.map((e) => {
        return callback(e)
    })

    return NewArray
}


const maius = (x: string) => x.toUpperCase();

console.log(callBack(['a', 'b', 'c'], maius)); //Deixa as letras todas maiusculas

