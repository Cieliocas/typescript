"use strict";
const alunos = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 25,
    },
    {
        nome: "Gian",
        cursos: ["Back-end", "DevOps"],
        idade: 27,
    },
    {
        nome: "Ana",
        cursos: ["Fullstack", "Data Science"],
        idade: 30,
    },
];
// alunos.push("Julia") // erro de compilação, pois o array é de objetos
// correto seria:
alunos.push({
    nome: "Julia",
    cursos: ["Front-end", "UX/UI"],
    idade: 25,
});
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
// exibeAluno(novoAluno)
function exibeAluno(aluno) {
    console.log(`O aluno ${aluno.nome} tem ${aluno.idade} anos e está matriculado nos cursos: ${aluno.cursos}`);
}
