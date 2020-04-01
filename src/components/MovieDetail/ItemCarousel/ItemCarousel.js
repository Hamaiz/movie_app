import React from 'react'
import Swiper from "swiper"

import "./ItemCarousel.scss"

const ItemCarousel = ({ quote, trailer }) => {

    new Swiper('.swiper-container', {
        slidesPerView: 1.5,
        spaceBetween: 30,
        observer: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            992: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1600: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
    // console.log(quote);

    return (
        <div className="item">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        trailer.map((item, i) => {
                            const Youtube = "https://www.youtube.com/embed/"

                            if (item.key === "") {
                                return (
                                    <div className="swiper-slide" key={i}>
                                        <div className="item_no">No Trailer :(</div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="swiper-slide" key={i}>
                                        <iframe title={item.name} src={Youtube + item.key} allowFullScreen>
                                        </iframe>
                                    </div>
                                )
                            }
                        })
                    }
                    {
                        quote.map((item, i) => {
                            if (item === "") {
                                return (
                                    <div className="swiper-slide" key={i}>
                                        <div className="item_no">No Reviews :(</div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="swiper-slide" key={i}>
                                        <blockquote>
                                            <p>{item.content}</p>
                                            <div className="item_footer">
                                                <a href={item.url} target="_blank" rel="noopener noreferrer">See full review</a>
                                            </div>
                                        </blockquote>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div>
    )
}

export default ItemCarousel
