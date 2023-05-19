import React from "react";

const SearchBox = ({ handleSearch, handleSearchSubmit, searchQuery }) => {
  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
