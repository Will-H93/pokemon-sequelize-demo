const express = require("express");

const router = express.Router();

const trainerController = require("../controllers/trainerController");

router
    .route("/")
    .get(trainerController.getTrainer)
    .post(trainerController.createTrainer)

router
    .route("/:id").get(trainerController.getTrainerByID)

module.exports = router