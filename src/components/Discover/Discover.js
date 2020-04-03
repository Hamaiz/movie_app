import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom"

//Components
import Loader from "../Loader/Loader"
import Header from "../Header/Header"
import Card from "../MovieList/Cards/Card"

//Style
import "./Discover.scss"

const Discover = () => {
    const API_KEY = process.env.REACT_APP_API_KEY

    //States
    const [sort, setSort] = useState("popularity.desc")
    const [page, setPage] = useState(1)
    const [year, setYear] = useState(null)
    const [vote, setVote] = useState(null)
    const [genre, setGenre] = useState(null)
    const [people, setPeople] = useState(null)
    const [total, setTotal] = useState("")
    const [data, setData] = useState([])
    const [query, setQuery] = useState(false)

    //API
    const discoverAPI = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=${sort}&include_video=false&page=${page}&${year ? `year=${year}` : ""}&${vote ? `vote_average.gte=${vote}` : ""}&${people ? `with_people=${people}` : ""}&${genre ? `with_genres=${genre}` : ""}`


    //EFFECT
    useEffect(() => {
        getDetails()
        //eslint-disable-next-line
    }, [page, query])

    const getDetails = async () => {
        const response = await fetch(discoverAPI)
        const data = await response.json()
        const { page, total_pages, results } = await data
        setPage(page)
        setTotal(total_pages)
        setData(results)
    }

    //JS
    let pagination = []
    let totalMin = Math.min(total, 10)

    for (let i = 1; i <= totalMin; i++) {
        let active = (page === i) ? "active" : ""
        pagination.push(
            <div onClick={() => setPage(i)} className={`pagination_i ${active}`}>
                <span>{i}</span>
            </div>
        )
    }

    const updateSearch = (setState) => (e) => {
        setState(e.target.value)
    }


    const getData = e => {
        e.preventDefault()
        if (query === false) setQuery(true)
        else if (query === true) setQuery(false)
    }

    return (
        <div>
            <Loader />
            <Header />
            <div className="discover_title">
                Find Films
            </div>
            <div className="discover_container">
                <form onSubmit={getData} className="discover_container_form">
                    <div className="discover_container_form_container">
                        <select
                            className="discover_container_form_select"
                            onChange={updateSearch(setSort)}
                        >
                            <option value="popularity.desc" className="discover_container_form_select_o">Popularity Descending</option>
                            <option value="popularity.asc" className="discover_container_form_select_o">Popularity Ascending</option>
                            <option value="release_date.desc" className="discover_container_form_select_o">Release Date Descending</option>
                            <option value="release_date.asc" className="discover_container_form_select_o">Release Date Ascending</option>
                            <option value="vote_average.desc" className="discover_container_form_select_o">Vote Average Descending</option>
                            <option value="vote_average.asc" className="discover_container_form_select_o">Vote Average Ascending</option>
                        </select>

                        <input
                            type="number"
                            className="discover_container_form_input"
                            min="0"
                            max="10"
                            placeholder="Rating"
                            onFocus={e => e.target.placeholder = ""}
                            onBlur={e => e.target.placeholder = "Rating"}
                            onChange={updateSearch(setVote)}
                        />
                        <input
                            type="number"
                            className="discover_container_form_input"
                            placeholder="Release Year"
                            maxLength="4"
                            min="1900"
                            max="2100"
                            onFocus={e => e.target.placeholder = ""}
                            onBlur={e => e.target.placeholder = "Release Year"}
                            onChange={updateSearch(setYear)}
                        />
                        <input
                            type="text"
                            className="discover_container_form_input"
                            placeholder="Genre"
                            onFocus={e => e.target.placeholder = ""}
                            onBlur={e => e.target.placeholder = "Genre"}
                            onChange={updateSearch(setGenre)}
                        />
                        <input
                            type="text"
                            className="discover_container_form_input"
                            placeholder="People"
                            onFocus={e => e.target.placeholder = ""}
                            onBlur={e => e.target.placeholder = "People"}
                            onChange={updateSearch(setPeople)}
                        />
                    </div>
                    <button type="submit" className="discover_container_form_btn">
                        Search
                    </button>
                </form>
            </div>

            <div className="list">
                <div className="list_grid">
                    <div className="cards">
                        <main className="page-content">
                            {
                                (!data)
                                    ?
                                    <div>
                                        Loading..
                                    </div>
                                    :
                                    data.map((movie, i) => (
                                        <Card
                                            key={i}
                                            id={movie.id}
                                            title={movie.title}
                                            img={movie.poster_path}
                                            rating={movie.vote_average}
                                            desc={movie.overview}
                                            genreId={movie.genre_ids}
                                        />
                                    ))}
                        </main>
                    </div>
                </div>
            </div>
            <div className="content_detail_pagination pagination">
                {
                    (page === 1) ?
                        ""
                        :
                        <div onClick={() => setPage((prevState) => prevState - 1)} className={`pagination_i_but `}>
                            <span>prev</span>
                        </div>
                }
                {pagination}
                {
                    (page === totalMin || !total) ?
                        ""
                        :
                        <div onClick={() => setPage((prevState) => prevState + 1)} className={`pagination_i_but `}>
                            <span>next</span>
                        </div>
                }

            </div>
        </div>
    )
}

export default Discover
