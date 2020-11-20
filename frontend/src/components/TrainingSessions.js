import React from 'react'
import TrainingSession from './TrainingSession'

const TrainingSessions = (trainingSessions) => {
    
    return (
        <div>
            {trainingSessions.trainingSessions.allTrainingSessions.map(t => 
                <TrainingSession trainingSession={t}/>
            )}
        </div>
    )
}

export default TrainingSessions
