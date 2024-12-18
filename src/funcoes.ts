// teste funcao calcula area
function calculaArea(base: number, altura: number): number {
    return base * altura;
}

// const com arrow
const calculaArea2 = (base: number, altura: number): number => base * altura;

// trabalhando com operador rest
function soma(...valores: number[]): number {
    return valores.reduce((soma, valor) => soma + valor, 0);
}



