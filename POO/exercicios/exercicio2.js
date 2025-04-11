class Veiculo{
  #marca;
  #modelo;
  #ano;

  constructor(marca, modelo, ano){
    this.#marca = marca;
    this.#modelo = modelo;
    this.#ano = ano;
  }

  getMarca(){
    return this.#marca;
  }

  getModelo(){
    return this.#modelo;
  }

  getAno(){
    return this.#ano;
  }

  exibirInfo(){
    console.log("\n====================== Ficha do Veículo =========================");
    console.log(`Veículo: ${this.#marca} ${this.#modelo}, Ano: ${this.#ano}`);
  }
}

class Carro extends Veiculo{
  #quantidadePortas;
  
  constructor(marca, modelo, ano, quantidadePortas){
    super(marca, modelo, ano);
    this.#quantidadePortas = quantidadePortas;
  }

  getQuantidadePortas(){
    return this.#quantidadePortas;
  }

  exibirInfo(){
    super.exibirInfo();
    console.log(`Tipo de Veículo: Carro | Quantidade de portas: ${this.#quantidadePortas}`);
    console.log(`================================================================\n`);
  }
}

const carro1 = new Carro("Toyota", "Corolla", 2020, 4);
carro1.exibirInfo();

const carro2 = new Carro("Honda", "Civic", 2021, 4);
carro2.exibirInfo();

const carro3 = new Carro("Ford", "Mustang", 2022, 2);
carro3.exibirInfo();