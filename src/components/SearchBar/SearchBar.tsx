import React, { useEffect, useRef, useState } from 'react';
import './SearchBar.scss';

function SearchBar() {
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

  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        type={'text'}
        value={value}
        onChange={handleChangeValue}
      />
    </div>
  );
}

export default SearchBar;
