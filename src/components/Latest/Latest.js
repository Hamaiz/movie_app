import React from 'react'
import Swiper from "swiper"
import "./Latest.scss"

//Carousel
import Carousel from "./Carousel/Carousel"

const Latest = ({ movies }) => {
    const movieSlice = movies.slice(9, 13)

    const swiper = new Swiper(".swiper-container", {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: '1',
        // loop: true,
        spaceBetween: 0,
        speed: 1000,
        parallax: true,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 10000,
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    return (
        <div className="latest">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {movieSlice.map((movie, i) => (
                        <Carousel
                            key={i}
                            title={movie.title}
                            img={movie.backdrop_path}
                            desc={movie.overview}
                            rating={movie.vote_average}
                        />

                    ))}
                </div>
                <div className="swiper-button-prev swiper-button-white"></div>
                <div className="swiper-button-next swiper-button-white"></div>
            </div>
        </div>
    )
}

export default Latest
