"use strict";
// Orientação a objetos com TypeScript
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `Olá, ${this.nome}`;
    }
}
// encapsulamento e modificadores de acesso
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(saldo) {
        this.saldo += saldo;
    }
}
