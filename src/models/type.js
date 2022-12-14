module.exports = (sequelize, DataTypes) => {
    const schema = {
        type_name: DataTypes.STRING
    }

    const Type = sequelize.define('Type', schema)
    return Type
}