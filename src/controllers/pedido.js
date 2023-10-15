import PedidoModel from "../models/pedido.js";
import ItensModel from '../models/pedido_itens.js';
import UsuarioModel from '../models/usuario.js';
import ProdutoModel from '../models/produto.js';


PedidoModel.belongsTo(ItensModel, { foreignKey: 'id_ped' });
PedidoModel.belongsTo(UsuarioModel, { foreignKey: 'id' });
ItensModel.belongsTo(ProdutoModel, { foreignKey: 'id_produto' });

async function findAll(req, res) {
    try {
      const pedidos = await PedidoModel.findAll({
        include: [
          {
            model: ItensModel,
            required: true,
          }
        ]
      });
      res.json(pedidos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pedidos.' });
    }
  }

function findOne(req, res) {
    try {
        PedidoModel.findByPk(req.params.id).then((result) => res.json(result));
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o pedido:'+ req.params.id});
    }
}

function addPedido(req, res) {
    try {
            PedidoModel.create({
            preco_total: req.body.preco_total,
            tot_itens: req.body.tot_itens,
            dt_inc: req.body.dt_inc,
            id_usuario: req.body.id_usuario,
            status: req.body.status,
            }).then((pedidoCriado) => {
                ItensModel.create({
                id_ped: pedidoCriado.id,
                id_produto: req.body.id_produto,
                valor_prod: req.body.valor_prod,
                quantidade: req.body.quantidade,
                }).then((result) => res.json(result));
            });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar o pedido.'});
    }
}

async function updatePedido(req, res) {
    try{
        await PedidoModel.update(
            {
                preco_total: req.body.preco_total,
                tot_itens: req.body.tot_itens,
                dt_inc: req.body.dt_inc,
                id_usuario: req.body.id_usuario,
                status: req.body.status,
            },
            {
            where: {
                id: req.params.id,
            },
            }
        );
        await ItensModel.update(
            {
                id_ped: pedidoCriado.id,
                id_produto: req.body.id_produto,
                valor_prod: req.body.valor_prod,
                quantidade: req.body.quantidade,
            },
            {
            where: {
                id: req.body.endereco_id,
            },
            }
        );
        PedidoModel.findByPk(req.params.id).then((result) => res.json(result));
    } catch (error) {
        res.status(500).json({ error: 'Erro ao editar pedido.'});
    }
}

async function deletePedido(req, res) {
    try{
        await ItensModel.destroy({
            where: {
            id: req.body.endereco_id,
            },
        });
        await PedidoModel.destroy({
            where: {
            id: req.params.id,
            },
        });
        PedidoModel.findAll().then((result) => res.json(result));
    } catch (error) {
        res.status(500).json({ error: 'Não foi possível deletar o pedido:'+req.params.id});
    }
}


export default { findAll, findOne, addPedido, updatePedido, deletePedido };