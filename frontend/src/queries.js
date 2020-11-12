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