import { ALL_EXERCISES } from './queries'
import { useQuery } from '@apollo/client'
import Exercises from './components/Exercises'
import TrainingSessionForm from './components/TrainingSessionForm'

const App = () => {
  const exercises = useQuery(ALL_EXERCISES)

  if (exercises.loading) {
    return <div>loading...</div>
  }


  return (
    <div>
      hello liftPal
      <TrainingSessionForm />
      <Exercises exercises={exercises.data}/>
    </div>
  );
}

export default App;
