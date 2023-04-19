class Vendas {
  constructor(i) {
    this.id = i.id;
    this.dataVenda = i.dataVenda;
    this.quantidade = i.quantidade;
    this.produtoId = i.produtoId;
    this.vendedorId = i.vendedorId;
  }

  create() {
    return `INSERT INTO vendas VALUE(DEFAULT, "${this.dataVenda}", ${this.quantidade}, ${this.produtoId}, ${this.vendedorId})`;
  }

  read() {
    return `SELECT * FROM vendas`;
  }

  update() {
    return `UPDATE vendas SET data_venda = "${this.dataVenda}", quantidade = ${this.quantidade}, produto_id = ${this.produtoId}, vendedor_id = ${this.vendedorId} WHERE id = ${this.id}`;
  }

  del() {
    return `DELETE FROM vendas WHERE id = ${this.id}`;
  }
}

module.exports = Vendas;
