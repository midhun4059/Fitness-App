
import { useState } from 'react'
import Generator from './Components/Generator'
import Hero from './Components/Hero'
import Workout from './Components/Workout'
import { generateWorkout } from './utils/functions'

const App = () => {

const[workout,setWorkout]=useState(null)

const[poison,setPoison]=useState('individual');
const[muscles,setMuscles]=useState([])
const[goal,setGoal]=useState('strength_power')

const updateWorkout=()=>{
  if(muscles.length < 1){
    return
  }
    let newWorkout=generateWorkout({poison,muscles,goal})
    
    setWorkout(newWorkout)
    window.location.href= '#workout'
  }
  
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-tr from-slate-500 to-slate-950 text-white text-sm sm:text-base'>
      <Hero/>
    <Generator poison={poison}
      setPoison={setPoison} 
      muscles={muscles} 
      setMuscles={setMuscles}
      goal={goal} 
      setGoal={setGoal} 
      updateWorkout={updateWorkout} />   
    {workout &&(<Workout workout={workout} />)} 
</main>
  )
}

export default App
