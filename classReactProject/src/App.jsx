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

  return (
    <div>
      {quotes[selected]}
    </div>
  )
}

export default App