import React, { useState } from 'react';
import './SearchBar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/storeRedux';
import { searchBarAction } from '../../../store/searchBarSlice';

function SearchBar() {
  const queryText = useSelector((state: RootState) => state.searchBar.queryText);
  const dispatch = useDispatch();
  const [value, setValue] = useState(queryText);

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const currentValue = value.trim();
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      dispatch(searchBarAction.setValue({ queryText: currentValue }));
      setValue(currentValue);
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
        data-testid="search_bar-input"
      />
    </div>
  );
}

export default SearchBar;
