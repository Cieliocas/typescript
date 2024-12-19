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
        this.saldo = 0; // public, private, protected
        this.numeroConta = numeroConta;
    }
    static retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(saldo) {
        this.saldo += saldo;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2; // exemplo de polimorfismo
    } // conseguimos acessar o saldo pois ele é protected ao invés de private
}
const contaDoPedro = new ContaBancaria(123456);
// contaDoPedro.depositar(100);
ContaBancaria.retornaNumeroDoBanco();
