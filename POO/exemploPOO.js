let produto = {
  nome: "Notebook",
  preco: 3000,
  desconto: function() {
    return this.preco * 0.1;
  }
};

console.log(produto.nome, "| Preço: R$" + produto.preco + " | Desconto: R$", produto.desconto());

// Em POO
class Produto{
  constructor(nome, preco){
    this.nome = nome,
    this.preco = preco
  }
  getDesconto(){
    return this.preco * 0.1;
  }

  getPrecoComDesconto(){
    return this.preco - this.getDesconto();
  }

  printProduto(){
    console.log(this.nome, "| Preço: R$" + this.preco + " | Desconto: R$", this.getDesconto(), "| Preço com desconto: R$", this.getPrecoComDesconto());
  }
}

let p1 = new Produto("Celular", 2000);
let p2 = new Produto("Tablet", 1500);

p1.printProduto();
p2.printProduto();

// Encapsulamento
class Usuario{
  #id;
  #nome;
  #senha;
  constructor(id, nome, senha){
    this.#id = id;
    this.#nome = nome;
    this.#senha = senha;
  }

  getId(){
    return this.#id;
  }
  getNome(){
    return this.#nome;
  }
  getSenha(){
    return this.#senha;
  }
  setNome(nome){
    this.#nome = nome;
  }
  setSenha(senha){
    this.#senha = senha;
  }
  setId(id){
    this.#id = id;
  }
  toString(){
    return `ID: ${this.#id} | Nome: ${this.#nome} | Senha: ${this.#senha}`;
  }
}

let user = new Usuario("a01", "Lucas", "123456");
console.log(user.toString());
