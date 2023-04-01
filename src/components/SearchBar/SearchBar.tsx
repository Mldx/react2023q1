import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import './SearchBar.scss';

interface ISearchBarProps {
  func?: Dispatch<SetStateAction<string>>;
}

function SearchBar({ func }: ISearchBarProps) {
  const initialValue = localStorage.getItem('searchBarValue') || '';
  const [value, setValue] = useState(initialValue);
  const searchBarValueRef = useRef(value);

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
    if (func) {
      e.code === 'Enter' && func(value);
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
