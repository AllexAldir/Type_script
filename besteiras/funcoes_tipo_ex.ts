type Maiu = (x: string) => string

function Dados(x: string[], func: Maiu): any {
    const NewArray = x.map(e => func(e))

    return NewArray
}

console.log(Dados(['a', 'b', 'c', 'teste'], function (x: string): string {
    let primeira = x[0].replace(x[0], x[0].toLocaleUpperCase())
    x = x.replace(x[0], primeira)
    return x

}))