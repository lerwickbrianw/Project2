"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Customers", [
      {
        name: "Brian Lerwick",
        username: "BWC Owner",
        password:
          "$2a$10$h9EL2vBsTI33dHig7Ps86u8BHKZ7XiOsG/aBedzSdmfFLKOmcdlTy",
        address: "W7663 Patrick Pl",
        city: "Beaver Dam",
        state: "WI",
        zipCode: "53916",
        phone: "19203561273",
        email: "BeaverWoodCarvers@gmail.com",
      },
      {
        name: "Altine Hesebeck",
        username: "Altine",
        password:
          "$2a$10$JPgbiPl6HIcEMo/OcHHXveODFDjfA0gLQFOM9MRT6l.waQOGZoeFG",
        address: "1226 N Center St",
        city: "Beaver Dam",
        state: "WI",
        zipCode: "53916",
        phone: "19208854587",
        email: "altineh@gmail.com",
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
