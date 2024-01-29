const { Router } = require("express");
const pokemonController = require("../controllers/pokemonController");

const router = new Router();

router
  .route("/")
  .get(pokemonController.getPokemon)
  .post(pokemonController.createPokemon);

router.route("/type/:type").get(pokemonController.getPokemonByTypeOne);

router.route("/type/:type1/:type2").get(pokemonController.getPokemonByTypeTwo);

router.route("/id/:id").get(pokemonController.getPokemonByID);

router.route("/trainer/:trainerId").get(pokemonController.getByTrainerId)

router
  .route("/:id")
  .patch(pokemonController.updatePokemonByID)
  .delete(pokemonController.deletePokemonById);

module.exports = router;
