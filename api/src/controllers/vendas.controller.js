const con = require("../database/connect");
const Vendas = require("../models/Vendas");

const createVendas = (req, res) => {
  con.query(new Vendas(req.body).create(), function (err, result) {
    if (err) {
      res.status(500).send({ err: err }).end();
    }

    res.status(201).json(result);
  });
};

const readVendas = (req, res) => {
  con.query(new Vendas(req.body).read(), function (err, result) {
    if (err) {
      res.status(500).send({ err: err }).end();
    }

    res.status(200).json(result);
  });
};

const getVendas = (req, res) => {
  const q = `SELECT * FROM total_vendas`;

  con.query(q, (err, result) => {
    if (err == null) {
      res.status(200).json(result);
    } else {
      res
        .status(404)
        .send("Erro:" + err)
        .end();
    }
  });
};

const getTotalVendas = (req, res) => {
  const q = `SELECT * FROM total_valor_vendas`;

  con.query(q, (err, result) => {
    if (err == null) {
      res.status(200).json(result);
    } else {
      res
        .status(404)
        .send("Erro:" + err)
        .end();
    }
  });
};

const getVendasComissao = (req, res) => {
  const q = `SELECT * FROM comissao_vendedores_valor`;

  con.query(q, (err, result) => {
    if (err == null) {
      res.status(200).json(result);
    } else {
      res
        .status(404)
        .send("Erro:" + err)
        .end();
    }
  });
};
const updateVendas = (req, res) => {
  con.query(new Vendas(req.body).update(), function (err, result) {
    if (result.affectedRows > 0) {
      res.status(202).json(result);
    } else {
      res.status(500).send({ err: err }).end();
    }
  });
};

const delVendas = (req, res) => {
  con.query(new Vendas(req.params).del(), function (err, result) {
    if (result.affectedRows > 0) {
      res.status(202).json(result);
    } else {
      res.status(500).send({ err: err }).end();
    }
  });
};

module.exports = {
  readVendas,
  getVendas,
  getTotalVendas,
  getVendasComissao,
  delVendas,
  createVendas,
  updateVendas,
};
