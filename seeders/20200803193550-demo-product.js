"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Products", [
      {
        productName: "Farm Sign",
        productDescription: "Life is Better on the Farm",
        productCategory: "Sign - Wooden",
        img:
          "https://res.cloudinary.com/dgvmjgamo/image/upload/v1596460232/Lerwick_Family_sign_h7bwmc.jpg",
      },
      {
        productName: "House Number",
        productDescription: "House Number Plaque",
        productCategory: "Sign - Address",
        img: "",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
