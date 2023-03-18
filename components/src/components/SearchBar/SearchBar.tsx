import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component<object, { value: string }> {
  constructor(props: object) {
    super(props);
    this.state = { value: localStorage.getItem('searchBarValue') || '' };
  }

  componentDidMount() {
    const valueLS = localStorage.getItem('searchBarValue');
    this.setState({ value: valueLS || '' });
  }

  componentWillUnmount() {
    localStorage.setItem('searchBarValue', this.state.value || '');
  }

  handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="searchBar">
        <input
          className="searchBar__input"
          type={'text'}
          value={this.state.value}
          onChange={this.handleChangeValue}
        />
      </div>
    );
  }
}

export default SearchBar;
