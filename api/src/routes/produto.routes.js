const { Router } = require("express");
const router = Router();

const produtoController = require("../controllers/produto.controller");

router.get("/listar", produtoController.readProduto);
router.post("/create", produtoController.createProduto);
router.put("/update", produtoController.updateProduto);
router.delete("/:id", produtoController.delProduto);

module.exports = router;
