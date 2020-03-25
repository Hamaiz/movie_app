import React, { useEffect, useState } from 'react'

import Header from "../Header/Header"
import Latest from "../Latest/Latest"
import MovieList from "../MovieList/MovieList"
import Footer from "../Footer/Footer"
import Loader from "../Loader/Loader"

const Movies = () => {
    //API KEY
    const API_KEY = process.env.REACT_APP_API_KEY

    //Fetching links
    const upcomingAPI = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
    const popularAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    const topAPI = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
    const nowplayingAPI = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    const genreAPI = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

    //State
    // const [latest, setLatest] = useState([])
    const [upcoming, setUpcoming] = useState([])
    const [popular, setPopular] = useState([])
    const [top, setTop] = useState([])
    const [playing, setPlaying] = useState([])
    const [genre, setGenre] = useState([])


    //Effects
    useEffect(() => {
        // getMovies(latestAPI, setLatest)
        getMovies(upcomingAPI, setUpcoming)
        getMovies(popularAPI, setPopular)
        getMovies(topAPI, setTop)
        getMovies(nowplayingAPI, setPlaying)
        getMovies(genreAPI, setGenre)
        // eslint-disable-next-line
    }, [])

    const getMovies = async (api, setState) => {
        const response = await fetch(api)
        const data = await response.json()
        const result = data.results
        setState(result)
    }

    //Latest
    // const latestSlice = playing.slice(9, 13)


    return (
        <div>
            <Loader />
            <Header />
            <Latest
                genre={genre}
                movies={playing}
            />
            <MovieList
                name="Upcoming"
                genre={genre}
                movies={upcoming}
            />
            <MovieList
                name="Now Playing"
                genre={genre}
                movies={playing}
            />
            <MovieList
                name="Popular"
                genre={genre}
                movies={popular}
            />
            <MovieList
                name="Top Rated"
                genre={genre}
                movies={top}
            />
            <Footer />

        </div>
    )
}

export default Movies