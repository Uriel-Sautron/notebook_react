/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import MarkdownInput from './Components/MarkdownInput';
import NotesViewver from './Components/NotesViewver';
import './Sass/App.scss';

const App = () => {
  
  const [notes, setNotes] = useState([]);
  
  const handleSave = (note) => {
    let save = [];
    notes ? save = [...notes, note] : save = [note];
    setNotes(save);
    localStorage.setItem('notes', JSON.stringify(save));
  };

  useEffect(() => {
    let storedValues = localStorage.getItem('notes');
    storedValues = JSON.parse(storedValues);
    setNotes(storedValues);
  }, [setNotes]);
  
  return (
    <div className="App">
      <div className="left">
        <NotesViewver notes={notes} />
      </div>
      <div className="right">
        <MarkdownInput handleSave={handleSave} />
      </div>
    </div>
  );
};

export default App;
