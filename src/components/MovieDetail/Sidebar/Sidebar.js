import React from 'react'
import "./Sidebar.scss"

function Sidebar({ poster, bigPic, post }) {
    const imageUrl = "https://image.tmdb.org/t/p/"
    const posterImage = {
        backgroundImage: `url(${imageUrl + "w300" + poster})`
    }
    // bigPic.forEach(r => console.log(imageUrl + "w300" + r.file_path))
    // post.forEach(r => console.log(r))

    return (
        <div className="sidebar">
            <div className="sidebar_image">
                <div className="sidebar_image_img" style={posterImage}></div>
            </div>
            <div className="sidebar_pics">
                {
                    post.slice(-8, -5).map((item, i) => {
                        const picsId = item.file_path.slice(1, -4)
                        const picUrl = "https://image.tmdb.org/t/p/w300"
                        const posterImage = {
                            backgroundImage: `url(${picUrl + item.file_path})`
                        }
                        return (
                            <a key={i} href={"#" + picsId}>
                                <div className="sidebar_pics_img" style={posterImage}></div>
                            </a>
                        )
                    })

                }
            </div>
            <div className="sidebar_back">
                {
                    bigPic.map((item, i) => {
                        const picsId = item.file_path.slice(1, -4)
                        const picUrl = "https://image.tmdb.org/t/p/w300"
                        const posterImage = {
                            backgroundImage: `url(${picUrl + item.file_path})`
                        }
                        return (
                            <a key={i} href={"#" + picsId}>
                                <div className="sidebar_back_img" style={posterImage}></div>
                            </a>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default Sidebar
