import express from "express";
import autorController from "../controllers/autorController.js";

const routes = express.Router();

routes.get("/autor", autorController.listarAutores);
routes.get("/autor/:id", autorController.listarAutorPorId);
routes.post("/autor", autorController.cadastrarAutor);
routes.put("/autor/:id", autorController.atualizaAutor);
routes.delete("/autor/:id", autorController.excluiAutor);

export default routes;