import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

//Components
import Loader from "../Loader/Loader"
import Header from "../Header/Header"
import Card from "../MovieList/Cards/Card"
import Footer from "../Footer/Footer"

//Style
import "./Search.scss"

const Search = ({ match, location }) => {
    const { id } = match.params
    const { search } = location
    const number = (search === "") ? "" : String(search.match(/\d+/g).map(Number))


    //States
    const [current, setCurrent] = useState(1)
    const [total, setTotal] = useState("")
    const [query, setQuery] = useState([])





    //API
    const searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${id}&page=${(number === "") ? 1 : number}`


    //useEffect
    useEffect(() => {
        getSearch()

        //eslint-disable-next-line
    }, [id, search])

    const getSearch = async () => {
        const response = await fetch(searchAPI)
        const data = await response.json()
        const { page, total_pages, results } = await data
        setCurrent(page)
        setTotal(total_pages)
        setQuery(results)
    }


    //JS Pagination
    let pagination = []
    for (let i = 1; i <= Math.min(total, 10); i++) {
        let active = (current === i) ? "active" : ""
        pagination.push(
            <Link to={`?page=${i}`} className={`pagination_i ${active}`}>
                < span className={` `}> {i}</span >
            </Link >
        )
    }
    const totalMin = String(Math.min(total, 10))


    return (
        <div>
            <Loader />
            <Header />
            <div className="list mt12">
                <div className="list_grid">
                    <div className="cards">
                        <main className="page-content">
                            {
                                (!query)
                                    ?
                                    <div>
                                        Loading
                                       </div>
                                    :
                                    query.map((movie, i) => (
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
                    (number === "1" || number === "") ?
                        ""
                        :
                        <Link to={`?page=${number - 1}`} className="pagination_i_but">
                            <span>prev</span>
                        </Link>
                }
                {pagination}
                {
                    (number === totalMin) ?
                        ""
                        :
                        <Link to={`?page=${(number) - (-1)}`} className="pagination_i_but">
                            <span>next</span>
                        </Link>
                }
            </div>
            <Footer />
        </div >
    )
}

export default Search
