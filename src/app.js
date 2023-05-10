const express = require('express')
const { Op } = require('sequelize')
const { Pokemon, Trainer } = require('./models')

const app = express()

app.use(express.json())

app.post('/pokemon', async(req, res) => {
    await Pokemon.create(req.body)

    res.sendStatus(201)
})

app.get('/pokemon', async(req, res) => {
    const pokemons = await Pokemon.findAll()

    res.status(200).json(pokemons)
})

app.get('/pokemon/type/:type1/:type2', async(req, res) => {
    const pokemons = await Pokemon.findAll({
        where: {
            [Op.or]: [{type: req.params.type1}, {type: req.params.type2}]
        }
    })

    res.status(200).json(pokemons)
})

app.get('/pokemon/:id', async(req, res) => {
    const pokemon = await Pokemon.findByPk(req.params.id)

    if (!pokemon) {
        res.status(400).json({msg: `Unable to find pokemon ${req.params.id}`})
    } else {
        res.status(200).json(pokemon)
    }
})

app.post('/trainer', async(req, res) => {
    await Trainer.create(req.body)

    res.sendStatus(201)
})

module.exports = app