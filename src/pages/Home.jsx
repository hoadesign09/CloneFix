import React, {useState, useEffect} from "react"
import Main from "../components/Main"
import Row from "../components/Row"
import requests from "../Requests"
import SearchBox from "../components/SearchBox"
import MovieList from "../pages/MovieList"

const Home = () => {
  const key = process.env.REACT_APP_IMDB_API_KEY

	const [movies, setMovies] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${key}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

  useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

  return (
    <div>
     <Main genre="popular"/>
     {/* <div>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movies={movies}/>
     </div> */}
     <Row title="UpComing" fetchURL={requests.requestUpcoming} rowID= '1' genre="upcoming" />
     <Row title="Popular" fetchURL={requests.requestPopular} rowID= '2' genre="popular"/>
     <Row title="Top Rated" fetchURL={requests.requestTopRated} rowID= '3' genre="top_rated"/>
     <Row title="Trending" fetchURL={requests.requestTrending} rowID='4' genre="popular"/>
     <Row title="Horror" fetchURL={requests.requestHorror} rowID='5'genre="horror"/>
    </div>
  )
}

export default Home