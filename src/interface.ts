// interfaces no typescript são como contratos, 
// onde você define quais propriedades e métodos uma classe deve ter
// para implementar uma interface, 
// você deve seguir o contrato definido por ela

class Conta {
    numeroConta: number;
    saldo: number = 0;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }
}


class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

// começando a interface
interface ITransacional { // contrato
    transferir: (valor: number, contaDestino: Conta) => boolean; // método
    taxaTransferencia: number; // propriedade
}

// utilizando o implements para implementar a interface ao invés de extends
// o implements é usado para implementar interfaces 
// ao invés de herdar propriedades e métodos
class ContaCorrente extends Conta implements ITransacional { 
    // implementando a interface   
    transferir(valor: number, contaDestino: Conta) { // método
        contaDestino.saldo += (valor - this.taxaTransferencia); // lógica
        return true; // retorno devido ao contrato
    };
    taxaTransferencia: number = 0; // propriedade
}


