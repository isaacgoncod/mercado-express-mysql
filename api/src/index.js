const express = require("express");
const cors = require("cors");

const authRoute = require("./routes/auth.route");

const app = express();

const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(authRoute);

app.listen(PORT, () => {
  console.log("Server running on port 3000");
});
