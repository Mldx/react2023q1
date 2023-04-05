import React, { useEffect, useRef, useState } from 'react';
import './SearchBar.scss';
import { useAppContext } from '../../../store/store';

function SearchBar() {
  const initialValue = localStorage.getItem('searchBarValue') || '';
  const [value, setValue] = useState(initialValue);
  const searchBarValueRef = useRef(value);
  const { setAppState } = useAppContext();

  useEffect(() => {
    return () => {
      localStorage.setItem('searchBarValue', searchBarValueRef.current);
    };
  }, []);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearchValue = event.target.value;
    setValue(currentSearchValue);
    searchBarValueRef.current = currentSearchValue;
  };
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      setAppState((prevState) => ({
        ...prevState,
        search: value.trim(),
      }));
      setValue(value.trim());
    }
  };

  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        type={'text'}
        value={value}
        onChange={handleChangeValue}
        onKeyUp={handleEnterKey}
      />
    </div>
  );
}

export default SearchBar;
