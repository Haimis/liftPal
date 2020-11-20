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
    },
    trainingSession: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TrainingSession'
    }
})

module.exports = mongoose.model('Exercise', schema)