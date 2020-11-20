import { gql } from '@apollo/client'

export const ALL_EXERCISES = gql`
query {
  allExercises {
    movement
    sets
    reps
    weight
  }
}
`

export const ALL_TRAINING_SESSIONS = gql`
query {
  allTrainingSessions {
    id
    date
    exercises {
      id
      movement
      sets
      reps
      weight
    }
  }
}
`

export const NEW_TRAINING_SESSION = gql`
  mutation newTrainingSession($date: Int, $exercises2: [String!]) {
    addTrainingSession (
      date: $date
      exercises: $exercises2
    ){
      id
    }
  }
`
export const NEW_EXERCISE = gql`
  mutation newExercise($movement: String, $sets: Int, $reps: Int, $weight: Int) {
    addExercise (
      movement: $movement
      sets: $sets
      reps: $reps
      weight: $weight
    ){
      id
    }
  }
`
