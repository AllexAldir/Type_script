//Agregação entre classes

export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = []

    inserirProdutos(...produtos: Produto[]): void {
        for (const i of produtos) {
            this.produtos.push(i)
        }
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, valor) => {
            return soma += valor.Preco
        }, 0)
    }
}

export class Produto {
    constructor(
        public Nome: string,
        public Preco: number
    ) { }
}

const Produto1 = new Produto('Camisa', 25);

const Carrinho1 = new CarrinhoDeCompras()
Carrinho1.inserirProdutos(Produto1)
console.log(Carrinho1);