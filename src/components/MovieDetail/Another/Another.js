import React from 'react'

const Another = ({ vote_average, homepage, title, country, language, release_date }) => {
    return (
        <div>
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
                <span>Release Date: </span>{release_date}
            </div>
        </div>
    )
}

export default Another
