class ContaBancaria {
  #titular;
  #saldo;
  constructor(titular, saldo) {
    this.#titular = titular;
    this.#saldo = saldo;
  }

  getTitular() {
    return this.#titular;
  }

  getSaldo() {
    return this.#saldo;
  }

  depositar(valor){
    this.#saldo += valor;
    console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.#saldo}`);
  }

  sacar(valor){
    if (valor > this.#saldo) {
      console.log("Não foi possível realizar o saque!");
      return;
    }
    this.#saldo -= valor;
    console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.#saldo}`);
  }

  exibirSaldo(){
    console.log("\n====================== Ficha da Conta =========================");
    console.log(`Titular: ${this.#titular}, Saldo: R$${this.#saldo}`);
    console.log("=============================================================\n");
  }
}

const conta1 = new ContaBancaria("João", 1000);
const conta2 = new ContaBancaria("Maria", 2000);
const conta3 = new ContaBancaria("José", 3000);

conta1.exibirSaldo();
conta1.depositar(500);
conta1.sacar(200);
conta1.exibirSaldo();

conta2.exibirSaldo();
conta2.depositar(1000);
conta2.sacar(500);
conta2.sacar(3000);
conta2.exibirSaldo();

conta3.exibirSaldo();
conta3.depositar(2000);
conta3.sacar(1000);
conta3.sacar(4000);
conta3.exibirSaldo();