import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [quote, setQuote] = useState('');
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      setQuote(res.data.content)
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div className="App">
      <button onClick={getQuote}>Get Quote</button>
      {quote ? <p>{quote}</p> : null}
      <span>Testing</span>
    </div>
  );
}

export default App;
