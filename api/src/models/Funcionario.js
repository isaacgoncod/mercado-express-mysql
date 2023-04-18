class Funcionario {
  constructor(i) {
    this.matricula = i.matricula;
    this.nomeCompleto = i.nomeCompleto;
    this.dataAdmissao = i.dataAdmissao;
    this.salario = i.salario;
    this.dataPagto = i.dataPagto;
    this.desempenho = i.desempenho;
    this.bonificacao = this.calcBonificacao();
    this.inss = this.calcInss();
    this.fgts = this.calcFgts();
    this.irrf = this.calcIrrf();
  }

  create() {
    return `INSERT INTO funcionario VALUE(DEFAULT, "${this.nomeCompleto}", "${this.dataAdmissao}",  ${this.salario}, CURDATE(),  ${this.desempenho}, ${this.bonificacao})`;
  }

  read() {
    return `SELECT * FROM funcionario`;
  }

  update() {
    return `UPDATE funcionario SET nome_completo = "${this.nomeCompleto}", data_admissao = "${this.dataAdmissao}", salario = ${this.salario}, data_pagto = "${this.dataPagto}", desempenho = ${this.desempenho}, bonificacao = ${this.bonificacao} WHERE matricula = ${this.matricula}`;
  }

  del() {
    return `DELETE FROM funcionario WHERE matricula = ${this.matricula}`;
  }

  anosTrabalhados() {
    let date1 = new Date(this.dataAdmissao);
    let date2 = new Date();

    let diferencaEmMilissegundos = Math.abs(date2.getTime() - date1.getTime());

    let diferencaEmAnos = Math.floor(
      diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000)
    );

    return diferencaEmAnos;
  }

  calcBonificacao() {
    return this.salario * 0.02 * this.anosTrabalhados() * this.desempenho;
  }

  calcInss() {
    let inss = 0;

    if (this.salario <= 1100) {
      inss = this.salario * 0.075;
    } else if (this.salario <= 2203.48) {
      inss = this.salario * 0.09;
    } else if (this.salario <= 3305.22) {
      inss = this.salario * 0.12;
    } else if (this.salario <= 6433.57) {
      inss = this.salario * 0.14;
    } else {
      inss = 751.99;
    }
    return inss.toFixed(2);
  }

  calcFgts() {
    const fgts = this.salario * 0.08;
    return fgts.toFixed(2);
  }

  calcIrrf() {
    let irrf = 0;

    if (this.salario <= 1903.98) {
      irrf = 0;
    } else if (this.salario <= 2826.65) {
      irrf = this.salario * 0.075 - 142.8;
    } else if (this.salario <= 3751.05) {
      irrf = this.salario * 0.15 - 354.8;
    } else if (this.salario <= 4664.68) {
      irrf = this.salario * 0.225 - 636.13;
    } else {
      irrf = this.salario * 0.275 - 869.36;
    }
    return irrf.toFixed(2);
  }
}

module.exports = Funcionario;
