const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  pic: String,
  city: {type: String, default: 'Anytown'},
  state: {type: String, default: 'USA'},
  cuisines: {type: String, required: true},
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)