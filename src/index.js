import roteadorUsuario from "./routes/usuario.js";
import roteadorLogin from "./routes/login.js";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: https://github.com/PedroH1884/API-Introducao-Atividade",
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});

app.use(roteadorUsuario);
app.use(roteadorLogin);
app.use(express.urlencoded({ extended: true }));