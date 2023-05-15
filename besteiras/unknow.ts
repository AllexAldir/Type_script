
function passaNum(x: unknown): boolean {
    let flag: boolean;
    flag = typeof x === 'number' ? true : false

    return flag
}

// console.log(passaNum(5))

const retornaNum = (): number => Math.round(Math.random() * (10 - 1) + 1)

//console.log(retornaNum())
let array_number: number[] = [];

while (array_number.length <= 100) {
    array_number.push(retornaNum());
}

//console.log(array_number);

const par: number[] = array_number.filter(e => e % 2 != 0)

console.log(par);