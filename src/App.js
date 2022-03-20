import './App.css';
import { useState, useReducer } from 'react';
import { ArticleStats } from './components/ArticleStats';

function App() {
  const [text, setText] = useState('');
  const [showExplanation, toggleExplanation] = useReducer(
    (state) => !state,
    false
  );

  return (
    <div className='wrapper'>
      <label htmlFor='text'>
        <textarea
          id='text'
          name='text'
          rows='10'
          cols='100'
          onChange={(event) => setText(event.target.value)}
        ></textarea>
      </label>
      <div>
        <button onClick={toggleExplanation}>Show Explanation</button>
      </div>
      <ArticleStats showExplanation={showExplanation} text={text} />
    </div>
  );
}

export default App;
