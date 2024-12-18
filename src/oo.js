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
