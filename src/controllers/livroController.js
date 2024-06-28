import livro from "../models/Livro.js";
import {autor} from "../models/Autor.js";

class LivroController {

    static async listarLivros (req, res){
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
          } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
          }
    }

    static async listarLivroPorId (req, res){
        try {
            const id = req.params.id;
            const livroResp = await livro.findById(id);
            res.status(200).json(livroResp);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
        }
    }
   
    static async listarLivroPorEditora (req, res){
        const editora = req.query.editora;
        try {        
            const livroPorEditora = await livro.find({editora: editora});
            res.status(200).json(livroPorEditora);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
        }
    }
   

    static async cadastrarLivros (req, res){
        const novoLivro = req.body;
        try{
            const autorLivro = await autor.findById(novoLivro.autor)
            const livroCompleto = {...novoLivro, autor:{... autorLivro._doc}};

            const livroCriado = await livro.create(livroCompleto);
            res.status(201).json({
                message: "criado com sucesso",
                livro: livroCriado
            });
        } catch(erro){
            res.status(500).json({
                message: `${erro.message} - falha ao cadastrar livro`,
            });
        }
    }

    static async atualizaLivro (req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização` });
        }
    }

    static async excluiLivro (req, res){
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro excluido."});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` });
        }
    }

}

export default LivroController;