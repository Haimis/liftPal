import React, {useState} from 'react'
import ExerciseForm from './ExerciseForm'
import { NEW_TRAINING_SESSION } from '../queries'
import { useMutation } from '@apollo/client'

const TrainingSessionForm = () => {
    const [exercises, setExercises] = useState([])

    const addExercise = ( newExercise ) => {
        setExercises(exercises.concat(newExercise))
    }

    const [ newTrainingSession ] = useMutation(NEW_TRAINING_SESSION, {

        onError: (error) => {
            console.log(error)
        },
        onCompleted: () => {
            console.log('New training session added')
        }
    })

    const handleSubmit = async ( event ) => {
        event.preventDefault()

        const date = 123

        newTrainingSession({
            variables:{date, exercises}
        })
        
        setExercises([])
    }



    return (

        <div>
            <div>
                <ExerciseForm addExercise={addExercise} />
            </div>

            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>movement</td>
                            <td>sets</td>
                            <td>reps</td>
                            <td>weight</td>
                        </tr>
                        {exercises.map(e =>
                        <tr key={e.movement}>
                            <td>{e.movement}</td>
                            <td>{e.sets}</td>
                            <td>{e.reps}</td>
                            <td>{e.weight}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <h2>
                Create training session
            </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <button
                        type="submit"
                        name="add"
                        value="add"
                        >create</button>
                </label>
            </form>
        </div>
    )
}

export default TrainingSessionForm