'use strict';

import { DataTypes } from 'sequelize';

const { Migration } = require('sequelize-cli');

export default class CreateShoesTable extends Migration {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  }

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shoes');
  }
}
