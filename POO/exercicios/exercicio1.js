class Produto {
  #nome;
  #preco;
  #estoque;

  constructor(nome, preco, estoque) {
    this.#nome = nome;
    this.#preco = preco;
    this.#estoque = estoque;
  }

  getNome() {
    return this.#nome;
  }

  getPreco() {
    return this.#preco;
  }

  getEstoque() {
    return this.#estoque;
  }

  setNome(nome) {
    this.#nome = nome;
  }

  setPreco(preco) {
    this.#preco = preco;
  }

  setEstoque(estoque) {
    this.#estoque = estoque;
  }

  vender(quantidade) {
    if (quantidade > this.#estoque){
      console.log("Não temos o suficiente em estoque!");
      return;
    }
    this.#estoque -= quantidade;
    console.log(
      `Vendido ${quantidade} unidades de ${this.#nome}. Estoque atual: ${
        this.#estoque
      }`
    );
  }

  repor(quantidade) {
    this.#estoque += quantidade;
    console.log(
      `Reposto ${quantidade} unidades de ${this.#nome}. Estoque atual: ${
        this.#estoque
      }`
    );
  }

  exibirInfo() {
    console.log("\n======================== Ficha do Produto =======================");
    console.log(`Produto: ${this.#nome}, Preço: R$${this.#preco}, Estoque: ${this.#estoque}`);
    console.log("=================================================================\n`);")
  }
}

// Exemplo de uso
const produto1 = new Produto("Celular", 2000, 50);
const produto2 = new Produto("Tablet", 1500, 30);
const produto3 = new Produto("Notebook", 5000, 20);
const produto4 = new Produto("Monitor", 1000, 10);

produto1.exibirInfo();
produto1.vender(10);
produto1.repor(5);
produto1.exibirInfo();

produto2.exibirInfo();
produto2.vender(5);
produto2.repor(10);
produto2.vender(15);
produto2.exibirInfo();

produto3.exibirInfo();
produto3.vender(2);
produto3.vender(5);
produto3.repor(20);
produto3.exibirInfo();

produto4.exibirInfo();
produto4.vender(3);
produto4.repor(2);
produto4.vender(10);
produto4.exibirInfo();