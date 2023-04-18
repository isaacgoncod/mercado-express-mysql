const conn = require("../database/connect");

const authCliente = (req, res) => {
  const { email, senha } = req.body;

  const query = `SELECT * FROM cliente WHERE email = '${email}' AND senha = '${senha}'`;

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
      delete clientePass.telefone_1;
      delete clientePass.telefone_2;
    }

    res.status(200).json(clientePass).end();
  });
};

module.exports = {
  authCliente,
};
