const { Pokemon } = require("../models");
const { Op } = require('sequelize')

const createPokemon = async (req, res) => {
  await Pokemon.create(req.body).then((pokemons) => {
    res.status(201).json(pokemons);
  });
};

const getPokemon = async (req, res) => {
  await Pokemon.findAll().then((pokemons) => {
    res.status(200).json(pokemons);
  });
};

const getPokemonByTypeOne = async (req, res) => {
  const pokemons = await Pokemon.findAll({ where: req.params })

  res.status(200).json(pokemons);
}
const getPokemonByTypeTwo = async (req, res) => {
  const pokemons = await Pokemon.findAll({
    where: {
      [Op.or]: [{ type: req.params.type1 }, { type: req.params.type2 }]
    }
  })

  res.status(200).json(pokemons)
};

const getPokemonByID = async (req, res) => {
  const pokemon = await Pokemon.findByPk(req.params.id);

  res.status(200).json(pokemon);
};

const getByTrainerId = async (req, res) => {
  const pokemons = await Pokemon.findAll({ where: req.params });

  res.status(200).json(pokemons);
}

const updatePokemonByID = async (req, res) => {
  const updated = await Pokemon.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(updated);
};

const deletePokemonById = async (req, res) => {
  const updated = await Pokemon.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(201).json(updated);
};

module.exports = {
  getPokemon,
  getPokemonByID,
  getPokemonByTypeOne,
  getPokemonByTypeTwo,
  getByTrainerId,
  createPokemon,
  updatePokemonByID,
  deletePokemonById,
};
