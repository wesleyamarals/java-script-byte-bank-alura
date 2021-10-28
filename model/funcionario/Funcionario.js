export class Funcionario{

    _nome;
    _cpf;
    _bonificacao;

    constructor(nome, cpf){
        this._nome = nome;
        this._cpf = cpf;
        this._bonificacao = 1;
    }

    get nome(){
        return this._nome;
    } 

    
    get cpf(){
        return this._nome;
    } 

    get _bonificacao(){
        return this._bonificacao;
    }
}