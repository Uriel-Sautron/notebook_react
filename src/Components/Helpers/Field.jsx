/* eslint-disable react/prop-types */
import React from 'react';

const Field = ({
  name, value, onChange,
}) => (
  <div>
    <input type="text" value={value} onChange={onChange} id={name} name={name} />
  </div>
);

export default Field;
