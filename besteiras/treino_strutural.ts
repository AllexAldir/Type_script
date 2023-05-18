export {teste}
type ob = { Item: string, Valor: number }
type func = (x: ob) => void

const teste: func = (x: ob) => {
    console.log(

        `Valor: ${x.Valor}`,
        `Item: ${x.Item}`

    )
}

teste({Item: 'Teste', Valor: 45})
