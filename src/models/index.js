const Sequelize = require("sequelize");
const PokemonModel = require("./pokemon");
const TrainerModel = require("./trainer");

const { PGNAME, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const setupDatabase = () => {
  const connection = new Sequelize(PGNAME, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres",
    logging: false,
  });

  const Pokemon = PokemonModel(connection, Sequelize);
  const Trainer = TrainerModel(connection, Sequelize);

  Pokemon.belongsTo(Trainer, { as: "trainer" });

  connection.sync({ alter: true });
  return {
    Pokemon,
    Trainer,
  };
};

module.exports = setupDatabase();
