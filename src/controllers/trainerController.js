const { Trainer } = require("../models")

const createTrainer = async (req, res) => {
  await Trainer.create(req.body).then((trainers) => {
    res.status(201).json(trainers);
  });
};

const getTrainer = async (req, res) => {
  await Trainer.findAll().then((trainers) => {
    res.status(200).json(trainers);
  });
};

const getTrainerByID = async (req, res) => {
  const trainer = await Trainer.findByPk(req.params.id);

  res.status(200).json(trainer);
};

module.exports = {
  createTrainer,
  getTrainer,
  getTrainerByID
}