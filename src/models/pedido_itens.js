import { Sequelize } from "sequelize";
import db from "../db.js";

export default db.define("pedido_itens", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_ped: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  id_produto: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  valor_prod: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
},
{
  timestamps: false,
  schema: 'ecommerce'
});

