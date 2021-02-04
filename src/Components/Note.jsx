import React from 'react';

// eslint-disable-next-line react/prop-types
const Note = ({ title, content }) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

export default Note;
