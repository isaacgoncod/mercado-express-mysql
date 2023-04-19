class Vendedor {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.matricula = i.matricula;
  }

  create() {
    return `INSERT INTO vendedor VALUE(DEFAULT, "${this.nome}", ${this.matricula})`;
  }

  read() {
    return `SELECT * FROM vendedor`;
  }

  update() {
    return `UPDATE vendedor SET nome = "${this.nome}", matricula = ${this.matricula} WHERE id = ${this.id}`;
  }

  del() {
    return `DELETE FROM vendedor WHERE id = ${this.id}`;
  }
}

module.exports = Vendedor;
