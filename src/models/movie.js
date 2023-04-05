const mongoose = require ('mongoose')

const movieSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    generos: {
        type: Array,
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
    video: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    year: {
        type: String,
    },
})

const Movie = mongoose.model('movie', movieSchema)

module.exports = Movie