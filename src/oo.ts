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
    saldo: number = 0;
    numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }

    getSaldo(): number {
        return this.saldo;
    }

    depositar(saldo: number): void {
        this.saldo += saldo;
    }
}