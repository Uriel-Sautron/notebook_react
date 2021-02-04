import React, { useState } from 'react';
import Field from './Helpers/Field';
import TextArea from './Helpers/TextArea';
import NoteDisplay from './NoteDisplay';

const MarkdownInput = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    const nameInput = e.target.name;
    if (nameInput === 'title') {
      setTitle(e.target.value);
    } else {
      setContent(e.target.value);
    }
  };
  console.log(title);

  return (
    <div>
      <div>
        <NoteDisplay title={title} content={content} />
      </div>
      <div>
        <Field name="title" value={title} onChange={handleChange} type="text" />
        <TextArea name="content" value={content} onChange={handleChange} />
      </div>
    </div>
  );
};

export default MarkdownInput;
