import React from 'react';
import './styles.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Pesquisar por categoria'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>X</span>}
      <button>Pesquisar</button>
    </form>
  </div>
);

export default SearchBar;