// src/components/Search.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../reducer/searchSlice';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    dispatch(setSearchQuery(e.target.value)); // Update Redux state with search query
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search for products..."
      />
    </div>
  );
};

export default Search;
