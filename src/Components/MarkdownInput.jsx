import React, { useState } from 'react';
import Field from './Helpers/Field';
import TextArea from './Helpers/TextArea';
import NoteDisplay from './NoteDisplay';
import Button from './Helpers/Button';
import useStateLocalStorage from './Helpers/LocalStorage';

const MarkdownInput = () => {

  const [title, setTitle] = useStateLocalStorage('title');
  const [content, setContent] = useStateLocalStorage('content');

  const handleClick = () => {
    let notes = localStorage.getItem('notes');
    if (!notes) {
      notes = [];
    } else {
      notes = JSON.parse(notes);
    }
    const note = { title, content };
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  const handleChange = (e) => {
    const nameInput = e.target.name;
    if (nameInput === 'title') {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }
  };

  return (
    <div>
      <div>
        <NoteDisplay title={title} content={content} />
      </div>
      <div>
        <Field name="title" value={title} onChange={handleChange} type="text" className="bg-gray" classNameParent="mb-5" />
        <TextArea name="content" value={content} onChange={handleChange} className="bg-gray" />
        <Button content="Sauvegarder" className="btn" onClick={handleClick} />
      </div>
    </div>
  );
};

export default MarkdownInput;
