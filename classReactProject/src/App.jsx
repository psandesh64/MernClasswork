import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

const App = () => {
  const [feedback,setFeedback]=useState({g:0,n:0,b:0})
  const increaseG = () =>{
    setFeedback({...feedback,g:feedback.g+1})
  }
  const increaseN = () =>{
    setFeedback({...feedback,n:feedback.n+1})
  }
  const increaseB = () =>{
    setFeedback({...feedback,b:feedback.b+1})
  }
  console.log(feedback)
  return (
    <>
    <h3>Give Feedback</h3>
    <button onClick={increaseG}>good</button>
    <button onClick={increaseN}>neutral</button>
    <button onClick={increaseB}>bad</button>
    <Statistics feed={[feedback.g,feedback.n,feedback.b]}/>
    </>
  )
}
const Statistics=(props)=>{
  if (props.feed[0]+props.feed[1]+props.feed[2]!=0){
  return(
    <>
    <h2>Statistics</h2>
    <p>Good:{Math.round(props.feed[0]*1000/(props.feed[0]+props.feed[1]+props.feed[2]))/10+"%"}</p> 
    <p>Neutral:{Math.round(props.feed[1]*1000/(props.feed[0]+props.feed[1]+props.feed[2]))/10+"%"}</p> 
    <p>Bad:{Math.round(props.feed[2]*1000/(props.feed[0]+props.feed[1]+props.feed[2]))/10+"%"}</p>
    </>
  )
  }
  else {
    return (
    <>
    <h2>Statistics</h2>
    <p>No Feedback Given</p>
    </>
    )
  }
}
export default App