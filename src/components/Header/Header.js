import React, { useState } from 'react'
import "./Header.scss"

import { Link } from "react-router-dom"
const Header = () => {
    //States
    const [search, setSearch] = useState("")

    //Function
    const updateSearch = e => {
        setSearch(e.target.value)
    }

    //Icons
    const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="25px" height="25px"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /><path d="M0 0h24v24H0z" fill="none" /></svg>;

    // JS
    const hamburgerChange = () => {
        const hamburger = document.querySelector(".header_hamburger")
        const down = document.querySelector(".containerDown")
        down.classList.toggle("isActive")
        hamburger.classList.toggle("is-active")

    }

    return (
        <header className="header">
            <div className="container">
                <form className="header_form">
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={updateSearch}
                    />
                    <Link to={`/search-query/${search}`}>
                        <button type="submit">
                            {searchIcon}
                        </button>

                    </Link>
                </form>

                <div className="header_img">
                    Movie Eye
                </div>

                <div className="header_hamburger" id="hamburger-6" onClick={hamburgerChange}>
                    <span className="header_hamburger_line"></span>
                    <span className="header_hamburger_line"></span>
                    <span className="header_hamburger_line"></span>
                </div>

                <ul className="header_list">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </div >
            <div className="containerDown">
                <div className="header_img_d">
                    Movie Eye
                </div>
                <ul className="header_list_d">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </div>
        </header >
    )
}

export default Header
