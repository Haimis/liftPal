const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    movement: {
        type: String
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    weight: {
        type: Number
    }
})

module.exports = mongoose.model('Exercise', schema)