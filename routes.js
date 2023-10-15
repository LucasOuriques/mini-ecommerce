import express from "express";
import usuario from "./src/controllers/usuario.js";
import produtos from "./src/controllers/produto.js";
import pedidos from "./src/controllers/pedido.js";

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ name: "Rota raiz" });
});

routes.get("/usuario", usuario.findAll);
routes.post("/usuario", usuario.addPessoa);
routes.get("/usuario/:id", usuario.findOne);
routes.put("/usuario/:id", usuario.updatePessoa);
routes.delete("/usuario/:id", usuario.deletePessoa);

routes.get("/produto", produtos.findAll);
routes.post("/produto", produtos.addProduto);
routes.get("/produto/:id", produtos.findOne);
routes.put("/produto/:id", produtos.updateProduto);
routes.delete("/produto/:id", produtos.deleteProduto);

routes.get("/pedido", pedidos.findAll);
routes.post("/pedido", pedidos.addPedido);
routes.get("/pedido/:id", pedidos.findOne);
routes.put("/pedido/:id", pedidos.updatePedido);
routes.delete("/pedido/:id", pedidos.deletePedido);

export { routes as default };