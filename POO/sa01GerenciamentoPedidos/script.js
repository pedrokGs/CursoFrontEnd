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

  adicionarCliente(){
    const nome = document.getElementById("clienteNome").value;
    if(!nome) return alert("Digite o nome do cliente!");
    const id = this.#clientes.length + 1;
    const cliente = new Cliente(id, nome);
    this.#clientes.push(cliente);
    this.#atualizarCliente();
    document.getElementById("clienteNome").value = "";
  }

  #atualizarCliente(){
    const lista = document.getElementById("listaClientes");
    lista.innerHTML = "";
    const selectCliente = document.getElementById("selectCliente");
    selectCliente.innerHTML = '<option value = "">Selecione um Cliente</option>';
    this.#clientes.forEach(cliente => {
      const li = document.createElement("li");
      li.innerHTML = cliente.getNome();
      lista.appendChild(li);

      const option = document.createElement("option");
      option.value = cliente.getId();
      option.innerHTML = cliente.getNome();
      selectCliente.appendChild(option);
    });
  }

  adicionarProduto(){
    const nome = document.getElementById("produtoNome").value;
    const preco = document.getElementById("produtoPreco").value;
    if(!nome || !preco) return alert("Preencha todos os campos!");
    const id = this.#produtos.length + 1;
    const produto = new Produto(id, nome, preco);
    this.#produtos.push(produto);
    this.atualizarProdutos();
    document.getElementById("produtoNome").value = "";
    document.getElementById("produtoPreco").value = ""
  };

  adicionarPedido(){
    
  }

}