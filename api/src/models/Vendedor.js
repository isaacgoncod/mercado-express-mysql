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
    return `UPDATE vendedor SET nome = "${this.nome}", matricula = ${this.matricula}, senha = "${this.senha}" WHERE id = ${this.id}`;
  }

  del() {
    return `DELETE FROM vendedor WHERE id = ${this.id}`;
  }
}

module.exports = Vendedor;
