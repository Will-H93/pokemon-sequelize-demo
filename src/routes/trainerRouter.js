const express = require("express");

const router = express.Router();

const trainerController = require("../controllers/trainerController");

router
    .route("/")
    .get(trainerController.getTrainer)
    .post(trainerController.createTrainer)

module.exports = router