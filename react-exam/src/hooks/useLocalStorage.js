<<<<<<< HEAD
import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setStoredValue = (newValue) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;
      setValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.log(err);
    }
  };

  return [value, setStoredValue];
}

export default useLocalStorage;
=======
import { useCallback, useEffect, useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const updateValue = useCallback((nextValue) => {
    setValue(nextValue);
  }, []);

  return [value, updateValue];
}
>>>>>>> 4fe9d87152a7bf1b82ff2f05596d99acc30dc045
