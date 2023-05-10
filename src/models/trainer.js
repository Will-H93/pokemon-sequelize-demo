const Trainer = (sequelize, DataTypes) => {
    const schema = {
        trainer_name: DataTypes.STRING
    }
    const Trainer = sequelize.define('trainer', schema)
    return Trainer
}

module.exports = Trainer