/* eslint-disable react/prop-types */
import React from 'react';

const TextArea = ({
  name, value, onChange, className,
}) => (
  <div>
    <textarea value={value} onChange={onChange} id={name} name={name} className={className} />
  </div>
);

export default TextArea;
