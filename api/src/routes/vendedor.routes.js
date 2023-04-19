const { Router } = require("express");
const router = Router();

const vendedorController = require("../controllers/vendedor.controller");

router.get("/listar", vendedorController.readVendedor);
router.post("/create", vendedorController.createVendedor);
router.put("/update", vendedorController.updateVendedor);
router.delete("/:id", vendedorController.delVendedor);

module.exports = router;
