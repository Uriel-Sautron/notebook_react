/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import MarkdownInput from './Components/MarkdownInput';
import NotesViewver from './Components/NotesViewver';
import './Sass/App.scss';

const App = () => {
  
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState({});
  
  const handleSave = (note) => {
    let save = [];
    notes ? save = [...notes, note] : save = [note];
    setNotes(save);
    localStorage.setItem('notes', JSON.stringify(save));
  };
  
  const handleDel = (index) => {
    let storedValues = localStorage.getItem('notes');
    storedValues = JSON.parse(storedValues);
    const newNotes = storedValues.filter((note) => storedValues.indexOf(note) !== index);
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  const hundleCurrentNote = (index) => {
    let storedValues = localStorage.getItem('notes');
    storedValues = JSON.parse(storedValues);
    const newCurrentNote = storedValues.filter((note) => storedValues.indexOf(note) === index);
    setCurrentNote(newCurrentNote);
  };

  useEffect(() => {
    let storedValues = localStorage.getItem('notes');
    storedValues = JSON.parse(storedValues);
    setNotes(storedValues);
  }, [setNotes]);
  
  return (
    <div className="App">
      <div className="left">
        <NotesViewver notes={notes} handleDel={handleDel} hundleCurrentNote={hundleCurrentNote} />
      </div>
      <div className="right">
        <MarkdownInput handleSave={handleSave} currentNote={currentNote} />
      </div>
    </div>
  );
};

export default App;
