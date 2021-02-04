import React from 'react';

const HandleSave = (title, content) => {

  localStorage.setItem(title, content);
};

export default HandleSave;
