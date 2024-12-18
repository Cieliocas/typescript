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