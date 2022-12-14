const express = require('express');
const { Pokemon } = require('./models')

const app = express();

app.use(express.json())

app.post('/pokemon', async(req, res) => {
    await Pokemon.create(req.body)

    res.sendStatus(201)
})

app.get('/pokemon', async(req, res) => {
    const pokemons = await Pokemon.findAll()

    res.status(200).json(pokemons)
})

app.get('/pokemon/:type', async(req, res) => {
    const pokemons = await Pokemon.findAll({where: req.params})

    res.status(200).json(pokemons)
})

app.get('/pokemon/id/:id', async(req, res) => {
    const pokemon = await Pokemon.findByPk(req.params.id)

    res.status(200).json(pokemon)
})

app.patch('/pokemon/:id', async(req, res) => {
    const updated = await Pokemon.update(req.body, {
        where: {
          id: req.params.id 
        }
    })
    res.status(200).json(updated)
})

app.delete('/pokemon/:id', async(req, res) => {
    const updated = await Pokemon.destroy({
        where: {
          id: req.params.id 
        }
    })
    res.status(201).json(updated)
})

module.exports = app;