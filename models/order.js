"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Product, { foreignKey: "productId" });
    }
  }
  Order.init(
    {
      customerId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
      customized: DataTypes.BOOLEAN,
      customMessage: DataTypes.STRING,
      orderStatus: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
