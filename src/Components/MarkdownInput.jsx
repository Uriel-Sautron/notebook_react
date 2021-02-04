/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Field from './Helpers/Field';
import TextArea from './Helpers/TextArea';
import NoteDisplay from './NoteDisplay';
import Button from './Helpers/Button';

const MarkdownInput = ({ handleSave }) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleClick = () => {
    const note = { title, content };
    handleSave(note);
    setContent('');
    setTitle('');
  };

  return (
    <>
      <NoteDisplay title={title} content={content} />
      <div>
        <Field name="title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="bg-gray" classNameParent="" />
        <TextArea name="content" value={content} onChange={(e) => setContent(e.target.value)} className="bg-gray" />
        <Button content="Sauvegarder" className="btn" onClick={handleClick} />
      </div>
    </>
  );
};

export default MarkdownInput;
