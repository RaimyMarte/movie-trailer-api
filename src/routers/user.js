const express = require("express");
const User = require("../models/user");
const auth = require('../middleware/auth')

const router = new express.Router()

router.post('/user', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.post('/user/login', async (req, res) => {

    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()

        res.send({ user, token })
    } catch (error) {
        res.status(500).send('Login Error')
    }
})


router.post('/user/logout', auth, async (req, res) => {

    try {
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token)

        await req.user.save()
        res.send()

    } catch (error) {
        res.status(500).send()
    }
})

router.post('/user/logoutall', auth, async (req, res) => {

    try {
        req.user.tokens = []

        await req.user.save()
        res.send()

    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router