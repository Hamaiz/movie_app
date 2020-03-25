import React from 'react'
import "./Card.scss"

const Card = ({ title, img, rating, desc, genreId, genres }) => {
    const imgUrl = "https://image.tmdb.org/t/p/w300"
    const cardStyle = {
        backgroundImage: `url(${imgUrl + img})`
    }



    return (
        <div className="card" style={cardStyle}>
            <div className="card_content">
                <div className="card_rating">{rating}</div>
                <h2 className="card_title">{title}</h2>
                <p className="card_copy">{desc}</p>
                <a href="/" className="card_btn">View</a>
            </div>
        </div>
    )
}

export default Card
