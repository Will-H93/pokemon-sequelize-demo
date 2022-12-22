module.exports = (sequelize, DataTypes) => {
  const schema = {
    name: DataTypes.STRING,
  };

  const Trainer = sequelize.define("Trainer", schema);
  return Trainer;
};
