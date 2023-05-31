//construtor privado e singleton
//so pode ser instânciada classe uma única vez

export class Database {
    private static banco: Database //Método que só pode ser instânciado pela classe e privado

    private constructor(
        private host: string,
        private user: string,
        private password: string | number
    ) { }

    conect(): void {
        console.log(`Conectando com o banco de dados ${this.user},${this.host},${this.password}`)
    }

    static bancoDados(host: string, user: string, password: string): Database {
        if (Database.banco) return Database.banco
        return Database.banco = new Database(host, user, password);

    }

    static verBanco(): void {
        console.log(Database.banco)
    }
}

const DT1 = Database.bancoDados('111.111.1.1', 'root', '12345678');
console.log(DT1)