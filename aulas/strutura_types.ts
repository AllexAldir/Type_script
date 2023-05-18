type User = { user: string, password: number }

type Cliente = (x: User, y: User) => boolean //Recebe dois parâmetros com valores do objeto do tipo User e retorna um boolean 

const c1: Cliente = (x: User, y: User) => {
    return (
        x.user === y.user && x.password === y.password
    )
}

console.log(c1({user: 'Lucas', password: 123},{user: 'Lucas', password: 123}))

