import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './SearchBox.css';
const SearchBox = () => {
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