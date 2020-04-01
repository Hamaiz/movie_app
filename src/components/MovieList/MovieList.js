import React from 'react'
import "./MovieList.scss"

//Card
import Card from "./Cards/Card"

const MovieList = ({ name, movies }) => {
    const movieSplice = movies.slice(0, 8)

    return (
        <div className="list">
            <div className="list_grid">
                <div className="cards">
                    <div className="list_name">{name}</div>
                    <main className="page-content">
                        {
                            movieSplice.map((movie, i) => (
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
    )
}

export default MovieList
