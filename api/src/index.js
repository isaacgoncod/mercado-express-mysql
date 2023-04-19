const express = require("express");
const cors = require("cors");

const authRoute = require("./routes/auth.route");
const vendedorRoutes = require("./routes/vendedor.routes");
const produtoRoutes = require("./routes/produto.routes");
const vendasRoutes = require("./routes/vendas.routes");

const app = express();

const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(authRoute);
app.use("/vendedor", vendedorRoutes);
app.use("/produto", produtoRoutes);
app.use("/vendas", vendasRoutes);

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
