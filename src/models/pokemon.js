const Pokemon = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING,
        type: DataTypes.STRING
    }
    const pokemon = sequelize.define('pokemon', schema)
    return pokemon
}

module.exports = Pokemon