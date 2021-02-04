import React, { useState, useEffect } from 'react';

const useStateLocalStorage = (localStorageKey) => {
  const [element, setElement] = useState(
    localStorage.getItem(localStorageKey) || '',
  );
  useEffect(() => {
    localStorage.setItem(localStorageKey, element);
  }, [element]);

  return [element, setElement];
};

export default useStateLocalStorage;
