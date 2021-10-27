'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        fullname: 'John Doe',
        email: 'sayaadalah@email.com',
        password: '$2a$12$FWK29o3wxTm6ao3TGdMXzuw8UNyIBRLWdLqrcVxUBGzOGj80MGhYm'
      }, 
      {
        id: 2,
        fullname: 'John Martin',
        email: 'siapa@email.com',
        password: '$2a$12$FWK29o3wxTm6ao3TGdMXzuw8UNyIBRLWdLqrcVxUBGzOGj80MGhYm'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
