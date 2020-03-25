import React from 'react'

const Carousel = ({ title, img, desc, rating }) => {
    const imgUrl = "https://image.tmdb.org/t/p/original"
    const latestStyle = {
        backgroundImage: `url(${imgUrl + img})`
    }

    return (
        <div className="swiper-slide" style={latestStyle}>
            <div className="latest_title" data-swiper-parallax="-500">{title}</div>
            <div className="latest_desc" data-swiper-parallax="-300">{desc}</div>
            <div className="latest_rating" data-swiper-parallax="-400">
                <span class="latest_name">Latest </span>| Rating: {rating} | Genre: Mystry
            </div>
        </div>
    )
}
export default Carousel
