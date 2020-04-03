import React, { useEffect, useState } from 'react'

import Header from "../Header/Header"
import Latest from "../Latest/Latest"
import MovieList from "../MovieList/MovieList"
import Footer from "../Footer/Footer"
import Loader from "../Loader/Loader"

const Movies = () => {
    //API KEY

    //Fetching links
    const upcomingAPI = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`
    const popularAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    const topAPI = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    const nowplayingAPI = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`



    //State
    const [upcoming, setUpcoming] = useState([])
    const [popular, setPopular] = useState([])
    const [top, setTop] = useState([])
    const [playing, setPlaying] = useState([])
    const ENDPOINT = "localhost:3000"


    //Effects
    useEffect(() => {
        getMovies(upcomingAPI, setUpcoming)
        getMovies(popularAPI, setPopular)
        getMovies(topAPI, setTop)
        getMovies(nowplayingAPI, setPlaying)
        // eslint-disable-next-line
    }, [ENDPOINT])

    const getMovies = async (api, setState) => {
        const response = await fetch(api)
        const data = await response.json()
        const result = data.results
        setState(result)

    }

    return (
        <div >
            <Loader />
            <Header />
            <Latest
                movies={playing}
            />
            <MovieList
                name="Upcoming"
                movies={upcoming}
            />
            <MovieList
                name="Now Playing"
                movies={playing}
            />
            <MovieList
                name="Popular"
                movies={popular}
            />
            <MovieList
                name="Top Rated"
                movies={top}
            />
            <Footer />

        </div>
    )
}

export default Movies