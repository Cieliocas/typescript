"use strict";
let estaChovendo = true; // boolean
// estaChovendo = 'true' // erro de compilação devido ao tipo da variável
let idade = 23; // number
let altura = 1.75; // number
const nacionalidade = 'brasileiro'; // string
// Teste de arrays
// tipos de arrays - string
const colegas = ['cielio', 'joao', 'maria']; // array de strings
// Outra forma de declarar um array tipado
const tecnologias = ['javascript', 'typescript', 'nodejs']; // array de strings
// Array de apenas leitura com tipo number
const notas = [10, 9, 8, 7, 6]; // array de números
tecnologias.push('react'); // erro de compilação, pois o array é de apenas leitura
// notas.push(5) // erro de compilação, pois o array é de apenas leitura
// criando tupla
const lista = ['gian', true, 27];
// union type
let idadeDaAna = 25; // aceita ambos
idadeDaAna = '25 anos'; // aceita ambos
// idadeDaAna = true // erro de compilação
// any type
let dadosDaApi; // aceita qualquer tipo de dado
dadosDaApi = 25;
dadosDaApi = '25 anos';
dadosDaApi = true;
dadosDaApi = ['gian', true, 27];
let curso = 'front-end'; // string
// curso = 2021 // number
