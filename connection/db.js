import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('bpo', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // Disable logging
  // logging: console.log // or true

});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

export default sequelize;
