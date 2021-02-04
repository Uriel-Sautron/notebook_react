import React from 'react';
import MarkdownInput from './Components/MarkdownInput';
import './Sass/App.scss';
import NotesViewver from './Components/NotesViewver';

const App = () => (
  <div className="App">
    <div>
      <NotesViewver />
    </div>
    <div>
      <h2>Right</h2>
      <MarkdownInput />
    </div>
  </div>
);

export default App;
