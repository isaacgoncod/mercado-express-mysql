class Produto {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.valor = i.valor;
  }

  create() {
    return `INSERT INTO produto VALUE(DEFAULT, "${this.nome}", ${this.valor})`;
  }

  read() {
    return `SELECT * FROM produto`;
  }

  update() {
    return `UPDATE produto SET nome = "${this.nome}", valor = ${this.valor} WHERE id = ${this.id}`;
  }

  del() {
    return `DELETE FROM produto WHERE id = ${this.id}`;
  }
}

module.exports = Produto;
