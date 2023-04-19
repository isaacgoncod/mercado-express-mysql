const conn = require("../database/connect");

const authVendedor = (req, res) => {
  const { matricula, senha } = req.body;

  const query = `SELECT * FROM vendedor WHERE matricula = ${matricula} AND senha = '${senha}'`;

  conn.query(query, function (err, resp) {
    if (err) {
      res.status(401).json(err).end();
    }
    if (resp.length == 0) {
      res.status(401).json({ msg: "Matricula ou Senha Inválidos" }).end();
    }

    let clientePass = resp[0];

    if (clientePass) {
      delete clientePass.senha;
    }

    res.status(200).json(clientePass).end();
  });
};

module.exports = {
  authVendedor,
};
