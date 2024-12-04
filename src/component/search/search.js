import React from 'react'
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from "../../reducer/searchSlice"; // Redux action

function Search() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const query = e.target.value;
    console.log("Search Query:", query);  // Add this log to verify input
    dispatch(setSearchQuery(query));
  };    

  return (
    <div>
      <Input 
        placeholder="Search products..."
        onChange={handleSearch} // On search input change, dispatch the query
        style={{ width: '100%', padding: '10px' }}
      />
    </div>
  )
}

export default Search;
