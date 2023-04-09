const mongoose = require ('mongoose')

const movieSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    generos: {
        type: Array,
        trim: true
    },
    direccion: {
        type: String,
        trim: true
    },
    reparto: {
        type: String,
        trim: true
    },
    sinopsis: {
        type: String,
        trim: true
    },
    video: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: String,
        trim: true
    },
})

const Movie = mongoose.model('movie', movieSchema)

module.exports = Movie