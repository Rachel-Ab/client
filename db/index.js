import pkg from 'sequelize';
const { Sequelize } = pkg;

async function dbconnexion() {
  const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_ENV,
      logging: false,
    }
  );

  try {
    await sequelize.authenticate();
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
}

export default dbconnexion;
