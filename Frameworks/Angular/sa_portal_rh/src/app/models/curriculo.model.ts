export class Curriculo {
  constructor(
    public cpf: string,
    public nome: string,
    public idade: number,
    public email: string,
    public contato: string,
    public interesses: Array<string>,
    public fotoPerfil: string,
    public experiencia: string,
    public formacao: Array<string>,
    public qualificacoes: Array<string>,
    public habilidades: Array<string>,
    public idiomas: Array<string>,
  ) {}

  toMap(): {[key:string]:any}{
    return{
      cpf: this.cpf,
      nome: this.nome,
      idade: this.idade,
      email: this.email,
      contato: this.contato,
      interesse: this.interesses,
      fotoperfil: this.fotoPerfil,
      experiencia: this.experiencia,
      formacao: this.formacao,
      qualificacoes: this.qualificacoes,
      habilidades: this.habilidades,
      idiomas: this.idiomas,
    }
  }

  static fromMap(map:any):Curriculo{
    return new Curriculo(
      map.cpf,
      map.nome,
      map.idade,
      map.email,
      map.contato,
      map.interesses,
      map.fotoPerfil,
      map.experiencia,
      map.formacao,
      map.qualificacoes,
      map.habilidades,
      map.idiomas,
    );
  }

}

