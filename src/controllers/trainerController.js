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

module.exports = {
    createTrainer,
    getTrainer
}