import { useState } from "react";

const App = () => {

  let quotes = [
    "Embrace the journey, for within the twists and turns, you discover the true colors of your soul.",

    "In the symphony of life, let resilience be the melody that carries you through every note of challenge.",

    "The canvas of your dreams awaits the brushstrokes of your determination. Paint a masterpiece.",

    "Wisdom whispers in the silence between words, and growth thrives in the spaces between comfort and chaos.",

    "Cherish the power of now, for it is the seed from which the tree of your future will bloom."
  ];

  const [selected, setSelected] = useState(0);
  const [highestIndex, setHighestIndex] = useState(0);
  const [points, setPoints] = useState([0,0,0,0,0]);

  const nextQuote = () => {
    if(selected === quotes.length -1) {
      setSelected(0);
    } else {
      setSelected(selected+1)
    }
  }

  const checkHighestVote = () => {
    console.log("checking")
    // loop points and check which index has highest
    // set highest index to a seperate state variable
  }

  const vote = () => {
    const copy = [...points];
    copy[selected] += 1;
    checkHighestVote();
    setPoints(copy);
  }

  return (
    <>
      <h1>Quote of the day</h1>
      <p>{quotes[selected]}</p>
      <button onClick={vote}>Vote</button>
      <button onClick={nextQuote}>Next quote</button>
      <h1>Quotes</h1>
      <p>{quotes[selected]}</p>
      <p>has {points[selected]} votes.</p>
      <button onClick={vote}>Vote</button>
      <button onClick={nextQuote}>Next quote</button>
    </>
  )
}
export default App