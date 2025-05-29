export class Vaga {
  // private id: number = 0;
  // private nome: string = '';
  // private foto: string = '';
  // private descricao: string = '';
  // private salario: number = 0;

  // constructor(
  //   id: number,
  //   nome: string,
  //   foto: string,
  //   descricao: string,
  //   salario: number
  // ) {
  //   this.id = id;
  //   this.nome = nome;
  //   this.foto = foto;
  //   this.descricao = descricao;
  //   this.salario = salario;
  // }

  constructor(
    public id: number,
    public nome: string,
    public foto: string,
    public descricao: string,
    public salario: number,
  ) {}

  // public getId(): number {
  //   return this.id;
  // }

  // public getNome(): string {
  //   return this.nome;
  // }

  // public getFoto(): string {
  //   return this.foto;
  // }

  // public getDescricao(): string {
  //   return this.descricao;
  // }

  // public getSalario(): number {
  //   return this.salario;
  // }

  toMap(): {[key:string]:any}{
    return{
      id: this.id,
      nome: this.nome,
      foto: this.foto,
      descricao: this.descricao,
      salario: this.salario,
    }
  }

  static fromMap(map:any):Vaga{
    return new Vaga(
      map.id,
      map.nome,
      map.foto,
      map.descricao,
      map.salario
    )
  }

}

