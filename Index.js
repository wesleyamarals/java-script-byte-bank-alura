import { Cliente } from "./model/cliente/Cliente.js";
import { Conta } from "./model/contas/Conta.js";

const cliente = new Cliente("Wesley",34641706832);
const conta = new Conta(1234, 15695, cliente);

conta.depositar(100);
conta.sacar(10);
conta.visualizarSaldo();
conta.depositar(50);
conta.visualizarSaldo();
conta.depositar(50);
conta.visualizarSaldo();
conta.sacar(200);
conta.visualizarSaldo();
