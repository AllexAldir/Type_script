//non-null assertion
const bd = document.querySelector("body")! //Informando ao type q um elemento não poderá ser nulo

//type-assertion

const bd2 = document.querySelector("body") as HTMLBodyElement // referindo q esse tipo é do: HTMLBodyElement

const input = document.querySelector('.input') as HTMLInputElement // referindo q esse tipo é do: HTMLInputElement

const input2 = (document.querySelector('.input') as unknown) as number // referindo q esse tipo é do: number de fomrma mais rigorosa

