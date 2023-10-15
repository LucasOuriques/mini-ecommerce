import ProdutoModel from "../models/produto.js";

async function findAll(req, res) {
  try{
    const produtos = await ProdutoModel.findAll();
    res.json(produtos);
  } catch(error) {
    res.status(500).json({ error: 'Erro ao buscar produtos.'});
  }
}

function findOne(req, res) {
  try{
    ProdutoModel.findByPk(req.params.id).then((result) => res.json(result));
  } catch(error) {
    res.status(500).json({ error: 'Erro ao buscar o pedido:'+req.params.id})
  }
}

function addProduto(req, res) {
  try{
    ProdutoModel.create({
    nome: req.body.nome,
    tipo: req.body.tipo,
    valor: req.body.valor,
    descricao: req.body.descricao,
    quantidade: req.body.quantidade,
    foto: req.body.foto
   })
} catch(error) {
  res.status(500).json({ error: 'Erro ao adicionar o produto.'});
}
}

async function updateProduto(req, res) {
  try{  
    await ProdutoModel.update(
      {
          nome: req.body.nome,
          tipo: req.body.tipo,
          valor: req.body.valor,
          descricao: req.body.descricao,
          quantidade: req.body.quantidade,
          foto: req.body.foto
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    ProdutoModel.findByPk(req.params.id).then((result) => res.json(result));
  } catch (error) {
    res.status(500).json({ error: 'Erro ao editar o produto.' });
  }
}

async function deleteProduto(req, res) {
  try {  
    await ProdutoModel.destroy({
      where: {
        id: req.body.id,
      },
    });
    ProdutoModel.findAll().then((result) => res.json(result));
  } catch(error) {
    res.status(500).json({ error: 'Erro ao deletar o produto.' })
  }
}


export default { findAll, findOne, addProduto, updateProduto, deleteProduto };