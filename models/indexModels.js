const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParse: true,
    useUnifiedTopology: true
})

module.exports.Place = require('./places')