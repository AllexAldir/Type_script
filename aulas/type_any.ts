//Utilizando o tipo any

export function say(msg: any) {
    return console.log(msg);
}

say([1, 2, 3]);
say(['1, 2, 3']);
say({ msg: 'teste', idade: 78 });
