import React from 'react'
import { Link } from "react-router-dom"


const Carousel = ({ iden, title, img, desc, rating }) => {
    const imgUrl = "https://image.tmdb.org/t/p/original"
    const latestStyle = {
        backgroundImage: `url(${imgUrl + img})`
    }
    return (
        <div className="swiper-slide" style={latestStyle}>
            <Link to={`/details/${iden}`}>
                <div className="latest_title" data-swiper-parallax="-500">{title}</div>
                <div className="latest_desc" data-swiper-parallax="-300">{desc}</div>
                <div className="latest_rating" data-swiper-parallax="-400">
                    <span className="latest_name">Latest </span>| Rating: {rating}
                </div>
            </Link>
        </div>
    )
}
export default Carousel
