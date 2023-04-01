const mongoose = require ('mongoose')

const movieSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    generos: {
        type: Array,
        required: true,
    },
    direccion: {
        type: String,
    },
    reparto: {
        type: String,
    },
    sinopsis: {
        type: String,
    },
    img: {
        type: String,
        required: true,
    },
})

const Movie = mongoose.model('movie', movieSchema)

module.exports = Movie