import React from 'react'
import { Link } from "react-router-dom"

import "./Card.scss"

const Card = ({ id, title, img, rating, desc, genreId, genres }) => {
    const imgUrl = "https://image.tmdb.org/t/p/w300"
    const noImage = "https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"

    const cardStyle = {
        backgroundImage: (img == null) ? `url(${noImage})` : `url(${imgUrl + img})`
    }

    return (
        <div className="card" style={cardStyle}>
            <div className="card_content">
                <div className="card_rating">{rating}</div>
                <h2 className="card_title">{title}</h2>
                <p className="card_copy">{desc}</p>
                <Link to={`/details/${id}`}>
                    <button className="card_btn">View</button>
                </Link>
            </div>
        </div>
    )
}

export default Card
