import React from 'react'

const TrainingSession = (trainingSession) => {

    if (trainingSession == null) {
        return (
            <div>
                loading
            </div>
        )
    }
    console.log(trainingSession.trainingSession.date)
    return (
        <div>

            <h2>{trainingSession.trainingSession.date}</h2>
            <table>
                <tbody>
                    <tr>
                        <td>movement</td>
                        <td>sets</td>
                        <td>reps</td>
                        <td>weight</td>
                    </tr>
                    {trainingSession.trainingSession.exercises.map(e =>
                    <tr key={e.id}>
                        <td>{e.movement}</td>
                        <td>{e.sets}</td>
                        <td>{e.reps}</td>
                        <td>{e.weight}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TrainingSession
