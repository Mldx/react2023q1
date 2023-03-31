import React, { useEffect, useState } from 'react';
import './SearchBar.scss';

function SearchBar() {
  const initialValue = localStorage.getItem('searchBarValue') || '';
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem('searchBarValue', value);
  }, [value]);
  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
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
