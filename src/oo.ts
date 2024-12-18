// Orientação a objetos com TypeScript
class Pessoa {
    nome: string;
    renda?: number;

    constuctor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = this.renda;
    }

    dizOla(): string {
        return `Olá, ${this.nome}`;
    }
}