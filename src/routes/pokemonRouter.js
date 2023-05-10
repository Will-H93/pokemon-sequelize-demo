const express = require("express");

const router = express.Router();

const pokemonController = require("../controllers/pokemonController");

router
  .route("/")
  .get(pokemonController.getPokemon)
  .post(pokemonController.createPokemon);

router.route("/type/:type").get(pokemonController.getPokemonByType);

router.route("/id/:id").get(pokemonController.getPokemonByID);

router.route("/trainer/:trainerId").get(pokemonController.getByTrainerId)

router
  .route("/:id")
  .patch(pokemonController.updatePokemonByID)
  .delete(pokemonController.deletePokemonById);

module.exports = router;
