import React from "react";

const SearchBox = (props) => {
	return (
		<div className="search-zone">
		<form>
		  <input type="text" name="search" placeholder="Type to search...." />
		  <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
		</form>
		</div>
	);
};

export default SearchBox;