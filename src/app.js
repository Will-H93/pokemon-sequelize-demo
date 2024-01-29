const express = require('express')
const pokemonRouter = require('../src/routes/pokemonRouter')
const trainerRouter = require('../src/routes/trainerRouter')

const app = express()

app.use(express.json())

app.use('/pokemons', pokemonRouter)
app.use('/trainers', trainerRouter)

module.exports = app