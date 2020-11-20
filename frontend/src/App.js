import { ALL_EXERCISES, ALL_TRAINING_SESSIONS } from './queries'
import { useQuery } from '@apollo/client'
import Exercises from './components/Exercises'
import TrainingSessionForm from './components/TrainingSessionForm'
import TrainingSessions from './components/TrainingSessions'

const App = () => {
  const exercises = useQuery(ALL_EXERCISES)
  const trainingSessions = useQuery(ALL_TRAINING_SESSIONS)

  if (exercises.loading || trainingSessions.loading) {
    return <div>loading...</div>
  }


  return (
    <div>
      hello liftPal
      <TrainingSessionForm />
      <Exercises exercises={exercises.data}/>
      <TrainingSessions trainingSessions={trainingSessions.data}/>
      
    </div>
  );
}

export default App;
