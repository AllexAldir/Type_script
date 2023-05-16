function teste(x: number | unknown): any {
    if (typeof x === 'string') return x
    return typeof x
}

console.log(teste(false))