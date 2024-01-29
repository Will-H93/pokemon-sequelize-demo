const Trainer = (sequelize, DataTypes) => {
    const schema = {
        name: DataTypes.STRING
    }
    const Trainer = sequelize.define('trainer', schema)
    return Trainer
}

module.exports = Trainer