export class Conta{

    _agencia;
    _numero;
    _cliente;
    _saldo;

    constructor(agencia,numero,cliente){
        this._agencia = agencia;
        this._numero = numero;
        this._cliente = cliente;
        this._saldo = 0;
    }

    get agencia(){
        return this._agencia;
    }

    get numero(){
        return this._numero;
    }

    get cliente(){
        return this._cliente;
    }

    get _saldo(){
        return this._saldo;
    }

    depositar(valor){
        console.info(`Depositando o valor de R$${valor},00`)
        if(valor > 0){
            this._saldo += valor;
            console.info(`Foi depositado o valor de R$${valor},00`)
        } else{
            console.error("Valor de depósito inválido.");
        }
    }

    sacar(valor){
        console.info(`Sacando o valor de R$${valor},00`)
        if(valor <= this._saldo){
            this._saldo -= valor;
            console.info(`Foi sacado o valor de R$${valor},00`)
        } else{
            console.error("Não há saldo suficiente");
        }
    }

    visualizarSaldo(){
        console.log(`Seu saldo é de R$${this._saldo},00`)
    }



    



}