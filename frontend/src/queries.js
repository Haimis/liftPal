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

export const NEW_TRAINING_SESSION = gql`
  mutation newTrainingSession($date: Int, $exercises: [Exercise]) {
    addTrainingSession (
      date: $date
      exercises: $exercises
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
