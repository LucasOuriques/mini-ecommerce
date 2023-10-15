import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("usuario", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dt_nascimento: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  endereco_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  codigo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  tipo: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  }
},
{
  timestamps: false,
  schema: 'ecommerce'
});