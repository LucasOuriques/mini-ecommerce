import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("endereco", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  logradouro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numero: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pais: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  complemento: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  id_usuario: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
},
{
  timestamps: false,
  schema: 'ecommerce'
});