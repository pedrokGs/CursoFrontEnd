// Criar as classes

class Cliente{
  #id; #nome;
  constructor(id, nome){
    this.#id = id;
    this.#nome = nome;
  }

  getId(){
    return this.#id;
  }
  getNome(){
    return this.#nome;
  }
}

class Produto{
#id; #nome; #preco;
  constructor(id, nome, preco){
    this.#id = id;
    this.#nome = nome;
    this.#preco = preco;
  }

  getId(){
    return this.#id;
  }
  getNome(){
    return this.#nome;
  }
  getPreco(){
    return this.#preco;
  }
}

class Pedido{
  #id; #cliente; #itens; #desconto; #total;
  constructor(id, cliente, itens, desconto){
    this.#id = id;
    this.#cliente = cliente;
    this.#itens = itens;
    this.#desconto = desconto;
    this.#total = this.calcularTotal();
  }

  getId(){
    return this.#id;
  }
  getCliente(){
    return this.#cliente;
  }
  getItens(){
    return this.#itens;
  }
  getDesconto(){
    return this.#desconto;
  }
  getTotal(){
    return this.#total;
  }

  calcularTotal(){
    let total = this.#itens.reduce((acc, item) => acc + item.preco, 0);
    return total - (total * this.#desconto / 100);
  }
}

class SistemaPedidos{
  #clientes; #produtos; #pedidos;
  constructor(){
    this.#clientes = [];
    this.#produtos = [];
    this.#pedidos = [];
  }

  
}