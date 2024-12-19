// Orientação a objetos com TypeScript
class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string {
        return `Olá, ${this.nome}`;
    }
}

// encapsulamento e modificadores de acesso
class ContaBancaria {
    protected saldo: number = 0; // public, private, protected
    numeroConta: number; // public

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    getSaldo() {
        return this.saldo;
    }

    depositar(saldo: number): void {
        this.saldo += saldo;
    }
}

class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number): void { // sobrescrita de método
        this.saldo = valor * 2; // exemplo de polimorfismo
    } // conseguimos acessar o saldo pois ele é protected ao invés de private
}