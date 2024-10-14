
import { useState } from 'react'
import { EXERCISES, SCHEMES, WORKOUTS } from '../utils/swoldier'
import SectionWrapper from './SectionWrapper'
import Workout from './Workout'


 const Header = (props) => {

  const {index,title,description}=props

  return (
    <div className='flex flex-col gap-4' >
      <div className='flex flex-col items-center justify-center  gap-3' >
        <div className='flex gap-6 '>

<p className='text-3xl sm:text-4xl md:text:5xl lg:text:6xl font-semibold text-slate-400  '>{index}</p>
<h4 className='text-3xl sm:text-2xl md:text-3xl lg:text-4xl'> {title}</h4>
        </div>
<p className='text-1xl sm:text-2xl md:text-3xl lg:text-5xl' >{description}</p>
      </div>
    </div>
  )
}


const Generator = () => {

  let [showModal,setShowModal]=useState(false);
  const[poison,setPoison]=useState('individual');
  const[muscles,setMuscles]=useState([])
  const[goals,setGoals]=useState('strength_power')
  const[list,setList]=useState('')

  const showToggle=()=>{
    setShowModal(!showModal)
  }
  return (
    <SectionWrapper header={"generate your workout"} title={['It\'s','Huge','o\'clock']}>
 
<Header index={'01'}  title={'Pick your poison'} description={'Select a workout you wish to do today!!'} />


<div className='grid grid-cols-2 sm:grid-cols-4 gap-2 mx-6  md:mx-1 '>
{Object.keys(WORKOUTS).map((type,typeIndex)=>{
return(
  
  <button onClick={()=>{
    setPoison(type)
  }} className={'bg-slate-800 border-2 rounded-lg py-4 duration-200 hover:border-blue-900'+(type===poison ?' border-blue-900 bg-slate-950':' border-blue-300')} key={typeIndex} >
    <p className='uppercase' >{type.replaceAll('_',' ')}</p>
  </button>
)
})}
</div>


<Header index={'02'}  title={'Lock on target'} description={'Select the muscles judged for annihilation.'} />


<div className='bg-slate-800 flex flex-col  border border-blue-400  rounded-lg'>
  <button onClick={showToggle} className='relative p-3  ' >
  <p>Select muscle group</p>
  <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
  </button>
{showModal &&(
  <div className='flex flex-col p-3 bg-slate-800 ' >{(poison ==='individual' ? WORKOUTS[poison] :Object.keys(WORKOUTS[poison])).map((muscleGroup,muscleGroupIndex)=>{
return(
  <button onClick={()=>{
setList(muscleGroup)
  }}  className={' bg-slate-900 py-2 m-2 border border-blue-400 rounded-lg hover:bg-slate-900 '} key={muscleGroupIndex}>
<p className='uppercase' >{muscleGroup}</p>
  </button>
)
  } )}</div>
) }

</div>

<Header index={'03'}  title={'Become Juggernaut'} description={'Select your ultimate objective'} />


<div className='grid grid-cols-3 gap-4 '>
{Object.keys(SCHEMES).map((scheme,schemeIndex)=>{
return(
  
  <button onClick={()=>{
    setGoals(scheme)
  }} className={'bg-slate-800 border-2  rounded-lg py-2 duration-200 hover:border-blue-600'+(scheme===goals ?' border-blue-900 bg-slate-950 ': ' border-blue-400')} key={schemeIndex} >
    <p className='uppercase'>{scheme.replaceAll('_',' ')}</p>
  </button>
)
})}
</div>



 </SectionWrapper>
  )
}

export default Generator
