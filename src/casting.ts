// let idade: any = 25; 
// está retornando erro pois a variável idade está sendo declarada em outro arquivo

namespace Casting { // problema resolvido
    let idade: any = 25; 
    (idade as number).toFixed(); // casting de idade para number
    (idade as string).length; // casting de idade para string
    (idade as string[]).forEach(x => { // casting de idade para string[], 
        console.log(x); // erro em tempo de execução
    }) // os metodos são aplicaveis quando o casting é feito para os tipos corretos
    
    let nome: string = 35 as unknown as string; // casting de number para string
    // o unknown é um tipo que aceita qualquer valor, mas não permite que você faça nada com ele
}