
const mongoose = require('mongoose')

const url = `mongodb+srv://raimy241:vI2HWcOgiOXPLa8R@movie-trailer-api.2mddchl.mongodb.net/movie-trailer-api`

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to the DB')
    })
    .catch((e) => {
        console.log('Error', e)
    })



