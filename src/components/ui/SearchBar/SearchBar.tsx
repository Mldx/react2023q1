import React, { useState } from 'react';
import './SearchBar.scss';
import { useAppContext } from '../../../store/store';

function SearchBar() {
  const initialValue = localStorage.getItem('searchBarValue') || '';
  const [value, setValue] = useState(initialValue);
  const { setAppState } = useAppContext();

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentSearchValue = event.target.value;
    setValue(currentSearchValue);
  };
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const currentValue = value.trim();
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      setAppState((prevState) => ({
        ...prevState,
        search: currentValue,
      }));
      setValue(currentValue);
      localStorage.setItem('searchBarValue', currentValue);
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
