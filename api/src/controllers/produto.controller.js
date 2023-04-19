const con = require("../database/connect");
const Produto = require("../models/Produto");

const createProduto = (req, res) => {
  con.query(new Produto(req.body).create(), function (err, result) {
    if (err) {
      res.status(500).send({ err: err }).end();
    }

    res.status(201).json(result);
  });
};

const readProduto = (req, res) => {
  con.query(new Produto(req.body).read(), function (err, result) {
    if (err) {
      res.status(500).send({ err: err }).end();
    }

    res.status(200).json(result);
  });
};

const updateProduto = (req, res) => {
  con.query(new Produto(req.body).update(), function (err, result) {
    if (result.affectedRows > 0) {
      res.status(202).json(result);
    } else {
      res.status(500).send({ err: err }).end();
    }
  });
};

const delProduto = (req, res) => {
  con.query(new Produto(req.params).del(), function (err, result) {
    if (result.affectedRows > 0) {
      res.status(202).json(result);
    } else {
      res.status(500).send({ err: err }).end();
    }
  });
};

module.exports = {
  readProduto,
  delProduto,
  createProduto,
  updateProduto,
};
