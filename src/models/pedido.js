import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("pedido", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  preco_total: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  tot_itens: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  dt_inc: {
    type: Sequelize.DATE,
    allowNull: false
  },
  id_usuario: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  status: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
},
{
  timestamps: false,
  schema: 'ecommerce'
});

