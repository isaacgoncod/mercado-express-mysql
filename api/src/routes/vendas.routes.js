const { Router } = require("express");
const router = Router();

const vendasController = require("../controllers/vendas.controller");

router.get("/listar", vendasController.readVendas);
router.get("/listar/venda", vendasController.getVendas);
router.get("/listar/venda/comissao", vendasController.getVendasComissao);
router.get("/total/venda", vendasController.getTotalVendas);
router.post("/create", vendasController.createVendas);
router.put("/update", vendasController.updateVendas);
router.delete("/:id", vendasController.delVendas);

module.exports = router;
