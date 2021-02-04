import React from 'react';
import MarkdownInput from './Components/MarkdownInput';
import './Sass/App.scss';

const App = () => (
  <div className="App">
    <div><h2>Left</h2></div>
    <div>
      <h2>Right</h2>
      <MarkdownInput />
    </div>
  </div>
);

export default App;
