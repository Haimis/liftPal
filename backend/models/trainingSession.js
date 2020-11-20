const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    date: {
        type: Date
    },
    exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise'
    }]
})

module.exports = mongoose.model('TrainingSession', schema)