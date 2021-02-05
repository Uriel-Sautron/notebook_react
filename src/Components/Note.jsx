/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Note = ({
  title, content, index, handleDel, hundleCurrentNote,
}) => (
  <div className="note" onDoubleClick={() => handleDel(index)} onClick={() => hundleCurrentNote(index)}>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

export default Note;
