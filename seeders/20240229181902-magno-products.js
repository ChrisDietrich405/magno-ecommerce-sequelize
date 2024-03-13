"use strict";

import { addShoes } from "../src/repos/shoesRepo";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const products = ["nike", "adidas", "reebok"];
    products.forEach((product) => addShoes(product));
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Shoes", null, {});
  },
};





