function duas(x: number | string, y: number | string): any {
    if (typeof x === 'number' && typeof y === 'number') return x + y
    return false
}

console.log(duas('ok',4))