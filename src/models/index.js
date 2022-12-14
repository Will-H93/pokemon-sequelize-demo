const Sequelize = require('sequelize');
const PokemonModel = require('./pokemon')
const TypeModel = require('./type')

const { PGNAME, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const setupDatabase = () => {
    const connection = new Sequelize(PGNAME, PGUSER, PGPASSWORD, {
        host: PGHOST,
        port: PGPORT,
        dialect: 'postgres',
        logging: false
    })

    const Pokemon = PokemonModel(connection, Sequelize)
    const Type = TypeModel(connection, Sequelize)

    Type.belongsTo(Pokemon, { as: 'type' })

    connection.sync({alter: true});
    return {
        Pokemon,
        Type
    }
}

module.exports = setupDatabase()