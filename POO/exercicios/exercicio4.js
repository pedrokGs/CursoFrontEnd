class Funcionario {
  #nome;
  #salario;
  #cargo;
  constructor(nome, salario, cargo) {
    this.#nome = nome;
    this.#salario = salario;
    this.#cargo = cargo
  }

  getNome() {
    return this.#nome;
  }

  getSalario() {
    return this.#salario;
  }

  getCargo() {
    return this.#cargo;
  }

  aumentarSalario(percentual){
    this.#salario += this.#salario * (percentual / 100);
    console.log(`Aumento de ${percentual}% no salário. Novo salário: R$${this.#salario}`);
  }

  exibirInfo(){
    console.log("\n====================== Ficha do Funcionário =========================");
    console.log(`Titular: ${this.#nome} | Salário: R$${this.#salario} | Cargo: ${this.#cargo}`);
    console.log("=============================================================\n");
  }
}

const funcionario1 = new Funcionario("João", 3000, "Gerente");
const funcionario2 = new Funcionario("Maria", 2500, "Analista");
const funcionario3 = new Funcionario("José", 2000, "Assistente");

funcionario1.exibirInfo();
funcionario1.aumentarSalario(10);
funcionario1.exibirInfo();

funcionario2.exibirInfo();
funcionario2.aumentarSalario(15);
funcionario2.exibirInfo();

funcionario3.exibirInfo();
funcionario3.aumentarSalario(20);
funcionario3.exibirInfo();