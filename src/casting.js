"use strict";
// let idade: any = 25; 
// está retornando erro pois a variável idade está sendo declarada em outro arquivo
var Casting;
(function (Casting) {
    let idade = 25;
    idade.toFixed(); // casting de idade para number
    idade.length; // casting de idade para string
    idade.forEach(x => {
        console.log(x); // erro em tempo de execução
    }); // os metodos são aplicaveis quando o casting é feito para os tipos corretos
    let nome = 35; // casting de number para string
    // o unknown é um tipo que aceita qualquer valor, mas não permite que você faça nada com ele
})(Casting || (Casting = {}));
