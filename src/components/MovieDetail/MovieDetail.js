import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

//Files
import Loader from "../Loader/Loader"
import Sidebar from "./Sidebar/Sidebar"
import Content from "./Content/Content"

//Style
import "./MovieDetail.scss"

const MovieDetail = ({ match }) => {
    const API_KEY = process.env.REACT_APP_API_KEY

    //State
    const { id } = match.params;
    const [detail, setDetail] = useState([])
    const [credit, setCredit] = useState([])
    const [video, setVideo] = useState([])
    const [image, setImage] = useState([])
    const [back, setBack] = useState([])
    const [genre, setGenre] = useState([])
    const [country, setCountry] = useState([])
    const [language, setLanguage] = useState([])
    const ENDPOINT = "localhost:3000"


    //API
    const detailAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    const creditAPI = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
    const videoAPI = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
    const imageAPI = `https://api.themoviedb.org/3/movie/${id}/images?api_key=${API_KEY}`


    //EFFECTS
    useEffect(() => {
        getDetails(videoAPI, setVideo)
        getCredits()
        getDetail()
        getImages()
        // eslint-disable-next-line
    }, [ENDPOINT])

    const getDetails = async (api, setState) => {
        const response = await fetch(api)
        const data = await response.json()
        setState(data)
    }
    const getDetail = async () => {
        const response = await fetch(detailAPI)
        const data = await response.json()
        const { genres, production_countries, spoken_languages } = data
        setDetail(data)
        setGenre(genres)
        setCountry(production_countries)
        setLanguage(spoken_languages)
    }
    const getImages = () => {
        fetch(imageAPI)
            .then(r => r.json())
            .then(res => {
                const { backdrops, posters } = res
                setImage(posters)
                setBack(backdrops)
            })
    }
    const getCredits = async () => {
        const response = await fetch(creditAPI)
        const data = await response.json()
        const cast = await data.cast
        setCredit(cast)
    }




    //Consts

    const { backdrop_path, poster_path, homepage, overview, status, title, vote_average, release_date } = detail
    const releaseDate = String(release_date).slice(0, 4)
    const creditSlice = credit.slice(0, 4)




    //Image
    const backdropImage = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`
    }

    // const Youtube = "https://www.youtube.com/watch?v="


    //SVG
    const backIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
    const descIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M6 8l18 32L42 8H6zm6.75 4h22.5L24 32 12.75 12z" /></svg>


    //I WAS FEELING LAZY SO...
    return (
        <div>
            {/* <Loader /> */}
            <div className="detail">

                <div className="detail_backdrop" style={backdropImage}></div>

                <div className="detail_side">
                    <Sidebar
                        poster={poster_path}
                        bigPic={back}
                        post={image}
                    />
                </div>

                <div className="detail_content" >
                    <Link to={"/"}>
                        <div className="detail_back">{backIcon}</div>
                    </Link>

                    <div className="detail_content_poster" >
                        <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="Poster Card" />
                    </div>

                    <div className="detail_content_inner">
                        <div className="detail_content_title">{title}
                            <span className="detail_content_date"> ({releaseDate})</span>
                        </div>
                        <div className="detail_content_names">
                            <span>Cast:  </span>
                            <span className="detail_content_data">
                                {
                                    creditSlice.map((item, i) => {
                                        return <data key={i} className="detail_content_data_in">{item.name}</data>
                                    })
                                }
                                <a href="#popup1" className="detail_content_data_button">
                                    more...
                                </a>
                            </span>
                            <div id="popup1" className="overlay">
                                <div className="popup">
                                    <h2>Cast</h2>
                                    <a href="#" className="close">&times;</a>
                                    <div className="popup_content">
                                        {
                                            credit.map((item, i) => {
                                                return <data key={i} className="popup_content_item">{item.name}</data>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Content
                            bigPic={back}
                            post={image}
                        />
                        <div className="detail_content_genre">
                            <span className="detail_content_genre_h">
                                Genre: </span>
                            {
                                genre.map((item, i) => {
                                    return <data key={i} className="detail_content_genre_g">
                                        {item.name}
                                    </data>
                                })
                            }
                        </div>
                    </div>
                    <div className="detail_content_another">
                        <div className="detail_content_another_rating">
                            <span>Rating: </span>{vote_average}
                        </div>

                        <div className="detail_content_another_country">
                            <span>Website: </span>
                            <a href={homepage} target="_blank" rel="noopener noreferrer" className="detail_content_another_country_n">
                                {(homepage === "") ? "No Website" : title}
                            </a>
                        </div>

                        <div className="detail_content_another_country">
                            <span>Countries: </span>
                            {
                                country.map((item, i) => {
                                    return <data key={i} className="detail_content_another_country_n">
                                        {item.name}
                                    </data>
                                })
                            }
                        </div>

                        <div className="detail_content_another_country">
                            <span>Language: </span>
                            {
                                language.map((item, i) => {
                                    return <data key={i} className="detail_content_another_country_n">
                                        {item.name} ({item.iso_639_1})
                                    </data>
                                })
                            }
                        </div>

                        <div className="detail_content_another_rating">
                            <span>Rating: </span>{release_date}
                        </div>

                    </div>
                    <div className="detail_content_descrtiption">
                        <div className="detail_content_descrtiption_icon">
                            {descIcon}
                            <span className="detail_content_descrtiption_n">
                                Overview
                                </span>
                        </div>
                        <div className="detail_content_descrtiption_o">
                            {overview}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail
