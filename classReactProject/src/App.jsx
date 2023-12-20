import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

const App = () => {
  const quotes = [
    'A rose by other name would smell as sweet.',
    'All that glitters is not gold.',
    'All the world\'s a stage, and all the men and women merely players. ',
  ]
  const [selected,setSelected] = useState(0);
  const handleNextQuote=() => setSelected(selected<quotes.length-1 ? selected+1 : 0)
  return (
    <div>
      <p>{quotes[selected]}</p>
      <button onClick={handleNextQuote}>Next quote</button>
    </div>
  )
}

export default App