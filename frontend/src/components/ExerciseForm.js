import React from 'react'

const ExerciseForm = ( props ) => {

    const handleSubmit = ( event ) => {
        event.preventDefault()
        const newExercise = {
            movement: event.target.movement.value,
            sets: event.target.sets.value,
            reps: event.target.reps.value,
            weight: event.target.weight.value,
        }
        event.target.movement.value = ''
        event.target.sets.value = 0
        event.target.reps.value = 0
        event.target.weight.value = 0

        props.addExercise(newExercise)
    }

    return (
        <div>
            <h2>
                Add exercise
            </h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Movement: 
                    <input 
                        type="text"
                        name="movement"
                        ></input>
                </label>
                <br></br>
                <label>
                    Sets: 
                    <input
                        type="number"
                        name="sets"
                        ></input>
                </label>
                <br></br>
                <label>
                    Reps: 
                    <input 
                        type="number"
                        name="reps"
                        ></input>
                </label>
                <br></br>
                <label>
                    Weight: 
                    <input 
                        type="number"
                        name="weight"
                        ></input>
                </label>
                <br></br>
                <label>
                    <button
                        type="submit"
                        >add</button>
                </label>
            </form>
        </div>
    )
}

export default ExerciseForm