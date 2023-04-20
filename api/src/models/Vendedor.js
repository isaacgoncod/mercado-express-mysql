class Vendedor {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.matricula = i.matricula;
    this.senha = i.senha;
  }

  create() {
    return `INSERT INTO vendedor VALUE(DEFAULT, "${this.nome}", ${this.matricula}, "${this.senha}")`;
  }

  read() {
    return `SELECT id, nome, matricula FROM vendedor`;
  }

  update() {
    return `UPDATE vendedor SET nome = "${this.nome}", senha = "${this.senha}" WHERE matricula = ${this.matricula}`;
  }

  del() {
    return `DELETE FROM vendedor WHERE id = ${this.id}`;
  }
}

module.exports = Vendedor;
