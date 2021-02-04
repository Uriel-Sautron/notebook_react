/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Helpers/Button';
import Note from './Note';

const NotesViewver = ({ notes }) => (
  <div>
    <Button content="Ajouter une note" className="btn" />
    {notes && notes.length > 0 && notes.map(({ 
      title, content,
    }, index) => <Note title={title} content={content} key={index} />)}
  </div>
);

export default NotesViewver;
