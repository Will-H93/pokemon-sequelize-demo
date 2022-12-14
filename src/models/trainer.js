module.exports = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING
    }

    const Trainer = sequelize.define('Type', schema)
    return Trainer
}