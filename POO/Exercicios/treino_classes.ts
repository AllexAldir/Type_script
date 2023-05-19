export class Alunos_ADS {
    constructor(protected Matricula: number, public Nome: string, readonly Nota1: number, readonly Nota2: number, readonly Nota_Trabalho: number) { }


    MediaAluno(): number | string {
        let pesoProva = 2.5
        let pesoTrabalho = 2

        const Media = ((this.Nota1 * pesoProva) + (this.Nota2 * pesoProva) + (this.Nota_Trabalho * pesoTrabalho)) / (pesoProva + pesoTrabalho)

        if (Media < 7) {
            return `Recuperação final... Você precisará de: ${Math.round(((7 - Media) * 100) / 100)} para passar no teste`
        }

        return Math.round(Media * 10) / 10

    }

}

const aluno1 = new Alunos_ADS(1211212, 'Vinicius', 5, 5, 0)

//console.log(aluno1);

// Escreva uma classe Data cuja instância (objeto) represente uma data.

export class Data {
    Data: any
    constructor(Data: any) { this.Data = Data }

    verificaData(x: Data): any | number {
        if (this.Data === x.Data) {
            return 0 
        }

        console.log(new Date())
    }

    
    public get retornaDia(): string {
        return this.Data.slice(0,2)
    }
    
    public get retornaMesExtenso(): any {
        let array_mes = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril',
            'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
            'Outubro', 'Novembro', 'Dezembro'
        ]
        
        let mes = this.Data.slice(3,5)
        if(mes[0] === 0) delete mes[0]
        
        return array_mes[Number(mes) - 1]
    }

    public get retornaMes(): string {
        return this.Data.slice(3,5) 
    }

    public get retornaAno(): string {
        return this.Data.slice(6,10)
    }


}

const d1 = new Data('19/05/2023')
const d2 = new Data('19/05/2023')

//console.log(d1.retornaAno)