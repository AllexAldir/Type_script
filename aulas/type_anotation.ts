//Tipos básicos :

let nome: string = 'lucas';
let idade: number = 45;
let adulto: boolean = true;
let simbolo: symbol = Symbol('teste');
// let big: bigint = 10n; 

/*Tipando Arrays*/

const arrayNumber: Array<number> = [1, 2, 3, 4];
const arrayString: Array<string> = ['1, 2, 3, 4'];
const arrayBolean: Array<boolean> = [true, false];

/*Segunda forma de tipar arrays*/
const arrayNumber2: number[] = [1, 2, 3, 4];
const arrayString2: string[] = ['1, 2, 3, 4'];
const arrayBolean2: boolean[] = [true, false];

/*Tipos de objetos*/

type Pessoa = string | number | boolean;

let ob1: { nome: Pessoa, idade: Pessoa, teste?: Pessoa } = {
    nome: 'Lucas',
    idade: 45,
    // teste: true
};

// console.log(ob1) 

/*Tipos de Funções*/

function teste(x: number, y: number) {
    return x * y
}

const teste2: (x: number, y: number) => number = (x, y) => x + y

console.log(teste2(1, 2))