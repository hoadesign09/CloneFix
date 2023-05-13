import React, {useState, useEffect} from "react"
import Main from "../components/Main"
import Row from "../components/Row"
import requests from "../Requests"
import Footer from "./Footer"
import SearchBox from "../components/SearchBox"
const Home = () => {
  return (
    <div>
      
     <Main genre="popular" />
     <SearchBox/>
     <Row title="UpComing" fetchURL={requests.requestUpcoming} rowID= '1' genre="upcoming" />
     <Row title="Popular" fetchURL={requests.requestPopular} rowID= '2' genre="popular"/>
     <Row title="Top Rated" fetchURL={requests.requestTopRated} rowID= '3' genre="top_rated"/>
     <Row title="Trending" fetchURL={requests.requestTrending} rowID='4' genre="popular"/>
     <Row title="Horror" fetchURL={requests.requestHorror} rowID='5'genre="horror"/>
     <Footer/>
    </div>
  )
}

export default Home