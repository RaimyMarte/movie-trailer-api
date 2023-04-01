const express = require("express");
const Movie = require("../models/movie");
const auth = require('../middleware/auth')

const router = new express.Router()


router.post('/movie', auth, async (req, res) => {
    const movie = new Movie(req.body)

    try {
        await movie.save()
        res.status(201).send(movie)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/movie', async (req, res) => {

    try {
        const movies = await Movie.find({})
        res.send(movies)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router

