import { useState,useEffect } from "react";

const App = () => {

  let quotes = [
    "Embrace the journey, for within the twists and turns, you discover the true colors of your soul.",

    "In the symphony of life, let resilience be the melody that carries you through every note of challenge.",

    "The canvas of your dreams awaits the brushstrokes of your determination. Paint a masterpiece.",

    "Wisdom whispers in the silence between words, and growth thrives in the spaces between comfort and chaos.",

    "Cherish the power of now, for it is the seed from which the tree of your future will bloom."
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0,0,0,0,0]);

  const highest = Math.max(...points);
  const highestIdx = points.indexOf(highest);

  const nextQuote = () => {
    if(selected === quotes.length -1) {
      setSelected(0);
    } else {
      setSelected(selected+1)
    }
  }

  const vote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  }

  return (
    <>
      <h1>Quote </h1>
      <p>{quotes[selected]}</p>
      <p>has {points[selected]} votes. </p>
      <button onClick={vote}>Vote</button>
      <button onClick={nextQuote}>Next quote</button>
      <h1>Quotes of the day</h1>
      <p>{quotes[highestIdx]}</p>
      <p>has {points[highestIdx]} votes.</p>
    </>
  )
}

export default App