// teste funcao calcula area
function calculaArea(base: number, altura: number): number {
    return base * altura;
}

// const com arrow
const calculaArea2 = (base: number, altura: number): number => base * altura;

// trabalhando com operador rest
function soma(...numeros: number[]): void {
    // numeros.reduce()
    console.log(numeros)
}

// union types em funcoes
function teste(): string | number {
    if (10 > 5) {
        return '10 é maior que 5';
    }  else {
        return 5;
    }
}

const resultadoDeTeste = teste(); // tipo string | number

