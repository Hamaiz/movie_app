import React, { useEffect } from 'react'
import "./Loader.scss"

const Loader = () => {


    useEffect(() => {
        // window.addEventListener("load", _ => {
        setTimeout(function () {
            const preLoader = document.querySelector(".preloader")
            preLoader.classList.add("loaded")
            document.body.style.overflowY = "visible"
        }, 2000)
        // })
    }, [])


    return (
        <div>
            <div className="preloader">
                <div className="spinner_wrap">
                    <div className="loader loader-18">
                        <div className="css-star star1"></div>
                        <div className="css-star star2"></div>
                        <div className="css-star star3"></div>
                        <div className="css-star star4"></div>
                        <div className="css-star star5"></div>
                        <div className="css-star star6"></div>
                        <div className="css-star star7"></div>
                        <div className="css-star star8"></div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Loader
