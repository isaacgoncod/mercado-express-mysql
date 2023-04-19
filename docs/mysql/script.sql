DROP DATABASE IF EXISTS mercado;

CREATE DATABASE mercado CHARSET = UTF8 COLLATE utf8_general_ci;

USE mercado;

CREATE TABLE
  vendedor (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    matricula INT NOT NULL
  );

CREATE TABLE
  produto (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    valor FLOAT (10, 2) NOT NULL
  );

CREATE TABLE
  vendas (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    data_venda DATE NOT NULL,
    quantidade INT NOT NULL,
    produto_id INT NOT NULL,
    vendedor_id INT NOT NULL,
    FOREIGN KEY (produto_id) REFERENCES produto (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (vendedor_id) REFERENCES vendedor (id) ON UPDATE CASCADE ON DELETE CASCADE
  );

CREATE VIEW
  total_vendas AS
SELECT
  produto.nome AS nome_produto,
  SUM(vendas.quantidade) AS total_vendido
FROM
  vendas
  INNER JOIN produto ON vendas.produto_id = produto.id
GROUP BY
  produto.nome;

CREATE VIEW
  total_valor_vendas AS
SELECT
  SUM(produto.valor * vendas.quantidade) AS total_valor_vendas
FROM
  vendas
  INNER JOIN produto ON vendas.produto_id = produto.id;

CREATE VIEW
  comissao_vendedores_valor AS
SELECT
  vendedor.nome,
  vendedor.matricula,
  SUM(produto.valor * vendas.quantidade) AS total_valor_vendido,
  SUM(produto.valor * vendas.quantidade) * 0.05 AS comissao
FROM
  vendas
  INNER JOIN produto ON vendas.produto_id = produto.id
  INNER JOIN vendedor ON vendas.vendedor_id = vendedor.id
GROUP BY
  vendedor.nome,
  vendedor.matricula;