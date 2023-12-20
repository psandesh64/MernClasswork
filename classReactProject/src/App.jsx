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
  const [votes, setVotes] = useState([0,0,0]);

  const handleNextQuote = () => setSelected(selected<quotes.length-1 ? selected+1 : 0);

  // Update handleVote to increment the vote for the selected quote
  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  return (
    <div>
      <p>{quotes[selected]}</p>
      <p>Votes: {votes[selected]}</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextQuote}>Next quote</button>
    </div>
  );
}

export default App

/*
const [votes, setVotes] = useState(Array(quotes.length).fill(0));
*/