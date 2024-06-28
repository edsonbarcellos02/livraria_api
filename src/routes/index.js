import express from "express";
import livros from "../routes/routerLivros.js";
import autores from "../routes/routerAutor.js";

const routes = (app)=>{
    app.route("/").get((req, res) => res.status("200").send("service on"));

    app.use(express.json(), livros, autores);
};
export default routes;