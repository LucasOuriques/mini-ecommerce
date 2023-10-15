import PessoaModel from "../models/usuario.js";
import EnderecoModel from '../models/endereco.js';

PessoaModel.belongsTo(EnderecoModel, { foreignKey: 'endereco_id' });

async function findAll(req, res) {
  try {
    const pessoas = await PessoaModel.findAll({ include: [
      {
        model: EnderecoModel,
        required: true,
      }
    ] });
    res.json(pessoas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários.'});
  }
}

function findOne(req, res) {
  try {
    PessoaModel.findByPk(req.params.id).then((result) => res.json(result));
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o usuário:'+req.params.id});
  }
}

function addPessoa(req, res) {
  try {  
    EnderecoModel.create({
      logradouro: req.body.endereco.logradouro,
      numero: req.body.endereco.numero,
      bairro: req.body.endereco.bairro,
      cidade: req.body.endereco.cidade,
      UF: req.body.endereco.UF,
      pais: req.body.endereco.pais,
      complemento: req.body.endereco.complemento,
      cep: req.body.endereco.cep,
    }).then((enderecoCriado) => {
      PessoaModel.create({
        nome: req.body.nome,
        idade: req.body.idade,
        dt_nascimento: req.body.dt_nascimento,
        codigo: req.body.codigo,
        tipo: req.body.tipo,
        observacoes: req.body.observacoes,
        endereco_id: enderecoCriado.id,
      }).then((result) => res.json(result));
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar usuário.'});
  }
}

async function updatePessoa(req, res) {
  try {  
    await PessoaModel.update(
      {
        nome: req.body.nome,
        idade: req.body.idade,
        dt_nascimento: req.body.dt_nascimento,
        codigo: req.body.codigo,
        tipo: req.body.tipo,
        observacoes: req.body.observacoes,
        endereco_id: req.body.endereco_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    await EnderecoModel.update(
      {
        logradouro: req.body.endereco.logradouro,
        numero: req.body.endereco.numero,
        bairro: req.body.endereco.bairro,
        cidade: req.body.endereco.cidade,
        UF: req.body.endereco.UF,
        pais: req.body.endereco.pais,
        complemento: req.body.endereco.complemento,
        cep: req.body.endereco.cep,
      },
      {
        where: {
          id: req.body.endereco_id,
        },
      }
    );
    PessoaModel.findByPk(req.params.id).then((result) => res.json(result));
  } catch (error) {
    res.status(500).json({ error: 'Erro ao editar o usuário.' });
  }
}

async function deletePessoa(req, res) {
  try {  
    await EnderecoModel.destroy({
      where: {
        id: req.body.endereco_id,
      },
    });
    await PessoaModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    PessoaModel.findAll().then((result) => res.json(result));
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar o usuário.' })
  }
}


export default { findAll, findOne, addPessoa, updatePessoa, deletePessoa };