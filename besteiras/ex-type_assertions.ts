// const tp01 = document.querySelector('body') as HTMLBodyElement
// const tp02 = document.querySelector('body') as HTMLBodyElement

type func_1 = (x: number[] | string[]) => number[];

const Dados: func_1 = (x) => {
    const rs = x.map((e: any) => e * 2)

    return rs
}

const retorn = Dados([1, 2, 3, 4, 4]);
console.log(retorn);