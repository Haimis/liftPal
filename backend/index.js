require('dotenv').config()
const { ApolloServer, gql } = require('apollo-server')

const mongoose = require('mongoose')
const Exercise = require('./models/exercise')
const TrainingSession = require('./models/trainingSession')

mongoose.set('useFindAndModify', false)

const MONGODB_URI = `mongodb+srv://fullstack:${process.env.MONGO_PW}@cluster0.so2kc.mongodb.net/liftPal?retryWrites=true&w=majority`

mongoose.set('useCreateIndex', true)

console.log('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology : true})
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((e) => {
        console.log(e.message)
    })

    const typeDefs = gql`
        type Exercise {
            id: ID!
            movement: String
            sets: Int
            reps: Int
            weight: Int
        }
        type TrainingSession {
            id: ID!
            date: Int
            exercises: [Exercise]
        }
        type Query {
            allTrainingSessions: [TrainingSession]
            allExercises(id: String): [Exercise]
        }
        type Mutation {
            addExercise(
                movement: String
                sets: Int
                reps: Int
                weight: Int
            ): Exercise
            addTrainingSession (
                date: Int
                exercises: [String!]
            ): TrainingSession
        }
    `

    const resolvers = {
        Query: {
            allTrainingSessions: async (root, args) => {
                const trainingSessions = await TrainingSession.find({})
                return trainingSessions
            },
            allExercises: async (root, args) => {
                if (args.id) {
                    return await Exercise.findOne({_id: root.id})
                }

                const exercises = await Exercise.find({})
                return exercises
            }
        },
        TrainingSession: {
            exercises: async (root) => {
                const exercises = await Promise.all(
                    root.exercises.map(async (e) => {
                        return await Exercise.findOne({_id: e})
                }))
                return exercises
            } 
        },
        Mutation: {
            addExercise: async (root, args, context) => {
                const exercise = new Exercise( {
                    movement: args.movement,
                    sets: args.sets,
                    reps: args.reps,
                    weight: args.weight
                })
                try {
                    await exercise.save()
                } catch (e) {
                    console.log(e)
                }

                return exercise
            },
            addTrainingSession: async (root, args) => {

                const savedExercises = await Promise.all(
                    args.exercises.map(async (e) => {
                        const jsonE = JSON.parse(e)
                        const exercise = new Exercise( {
                            movement: jsonE.movement,
                            sets: jsonE.sets,
                            reps: jsonE.reps,
                            weight: jsonE.weight
                        })
                        return exercise.save()
                }))

                console.log(savedExercises)

                const trainingSession = new TrainingSession( {
                    date: args.date,
                    exercises: savedExercises
                })
                try {
                    await trainingSession.save()
                } catch (e) {
                    console.log(e)
                }

                return trainingSession
            }
        },
        
    }

    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    server.listen().then(({ url }) => {
        console.log(`Server ready at ${url}`)
    })