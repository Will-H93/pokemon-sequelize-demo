const express = require("express");
const pokemonRouter = require("./routes/pokemonRouter");
const trainerRouter = require("./routes/trainerRouter")

const app = express();

app.use(express.json());

app.use("/pokemons", pokemonRouter);
app.use("/trainers", trainerRouter)


module.exports = app;
