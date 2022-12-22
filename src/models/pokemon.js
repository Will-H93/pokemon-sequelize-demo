module.exports = (sequelize, DataTypes) => {
  const schema = {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
  };

  const Pokemon = sequelize.define("Pokemon", schema);
  return Pokemon;
};
