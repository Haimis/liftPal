import React from 'react'

const Exercises = (exercises) => {

    return (
        <table>
            <tbody>
                <tr>
                    <td>movement</td>
                    <td>sets</td>
                    <td>reps</td>
                    <td>weight</td>
                </tr>
                {exercises.exercises.allExercises.map(e =>
                <tr key={e.id}>
                    <td>{e.movement}</td>
                    <td>{e.sets}</td>
                    <td>{e.reps}</td>
                    <td>{e.weight}</td>
                </tr>
                )}
            </tbody>
        </table>
    )
}

export default Exercises