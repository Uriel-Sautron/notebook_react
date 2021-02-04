/* eslint-disable react/prop-types */
import React from 'react';

const Field = ({
  name, value, onChange, className, classNameParent,
}) => (
  <div className={classNameParent}>
    <input type="text" value={value} onChange={onChange} id={name} name={name} className={className} />
  </div>
);

export default Field;
