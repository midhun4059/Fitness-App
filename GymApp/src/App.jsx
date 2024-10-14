
import Generator from './Components/Generator'
import Hero from './Components/Hero'
import Workout from './Components/Workout'

const App = () => {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-b from-slate-500 to-slate-950 text-white text-sm sm:text-base'>
      <Hero/>
    <Generator/>   
    <Workout/> 
</div>
  )
}

export default App
