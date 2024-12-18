"use strict";
// teste funcao calcula area
function calculaArea(base, altura) {
    return base * altura;
}
// const com arrow
const calculaArea2 = (base, altura) => base * altura;
// trabalhando com operador rest
function soma(...numeros) {
    // numeros.reduce()
    console.log(numeros);
}
// union types em funcoes
function teste() {
    if (10 > 5) {
        return '10 é maior que 5'; // string
    }
    else {
        return 5; // number
    }
}
//testando a funcao
const resultadoDeTeste = teste(); // tipo string | number
