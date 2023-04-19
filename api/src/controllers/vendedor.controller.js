const con = require("../database/connect");
const Vendedor = require("../models/Vendedor");

const createVendedor = (req, res) => {
  con.query(new Vendedor(req.body).create(), function (err, result) {
    if (err) {
      res.status(500).send({ err: err }).end();
    }

    res.status(201).json(result);
  });
};

const readVendedor = (req, res) => {
  con.query(new Vendedor(req.body).read(), function (err, result) {
    if (err) {
      res.status(500).send({ err: err }).end();
    }

    res.status(200).json(result);
  });
};

const updateVendedor = (req, res) => {
  con.query(new Vendedor(req.body).update(), function (err, result) {
    if (result.affectedRows > 0) {
      res.status(202).json(result);
    } else {
      res.status(500).send({ err: err }).end();
    }
  });
};

const delVendedor = (req, res) => {
  con.query(new Vendedor(req.params).del(), function (err, result) {
    if (result.affectedRows > 0) {
      res.status(202).json(result);
    } else {
      res.status(500).send({ err: err }).end();
    }
  });
};

module.exports = {
  readVendedor,
  delVendedor,
  createVendedor,
  updateVendedor,
};
