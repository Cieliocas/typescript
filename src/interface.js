"use strict";
// interfaces no typescript são como contratos, 
// onde você define quais propriedades e métodos uma classe deve ter
// para implementar uma interface, 
// você deve seguir o contrato definido por ela
class Conta {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
// utilizando o implements para implementar a interface ao invés de extends
// o implements é usado para implementar interfaces 
// ao invés de herdar propriedades e métodos
class ContaCorrente extends Conta {
    constructor() {
        super(...arguments);
        this.taxaTransferencia = 0; // propriedade
    }
    // implementando a interface   
    transferir(valor, contaDestino) {
        contaDestino.saldo += (valor - this.taxaTransferencia); // lógica
        return true; // retorno devido ao contrato
    }
    ;
}
