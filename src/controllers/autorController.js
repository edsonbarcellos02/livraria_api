import {autor} from "../models/Autor.js";

class autorController {

    static async listarAutores (req, res){
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
          } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
          }
    }

    static async listarAutorPorId (req, res){
        try {
            const id = req.params.id;
            const data = await autor.findById(id);
            res.status(200).json(data);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
        }
    }
   
    static async cadastrarAutor (req, res){
        try{
            const data = await autor.create(req.body);
            res.status(201).json({
                message: "criado com sucesso",
                livro: data
            });
        } catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha ao cadastrar livro`,
            });
        }
    }

    static async atualizaAutor (req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    }

    static async excluiAutor (req, res){
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: "Livro excluido."});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` });
        }
    }

}

export default autorController;