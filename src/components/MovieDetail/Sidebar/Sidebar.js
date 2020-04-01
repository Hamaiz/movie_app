import React from 'react'
import "./Sidebar.scss"

function Sidebar({ recomend, poster, bigPic, post }) {
    const imageUrl = "https://image.tmdb.org/t/p/"
    const posterImage = {
        backgroundImage: `url(${imageUrl + "w300" + poster})`
    }

    return (
        <div className="sidebar">
            {
                (poster == null) ? null
                    :
                    <div className="sidebar_image">
                        <div className="sidebar_image_img" style={posterImage}></div>
                    </div>
            }
            <div className="sidebar_recomended">
                <div className="sidebar_recomended_title">Recomended</div>

                {
                    recomend.slice(0, 6).map((item, i) => {
                        const imgUrl = "https://image.tmdb.org/t/p/w185"
                        const noImage = "https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"

                        const cardStyle = {
                            backgroundImage: (item.poster_path == null) ? `url(${noImage})` : `url(${imgUrl + item.poster_path}`
                        }

                        return (
                            <a href={`/details/${item.id}`} key={i}>
                                <div className="sidebar_recomended_card" style={cardStyle} key={i}>
                                    <div className="sidebar_recomended_card_content">
                                        <h2 className="sidebar_recomended_card_title">{item.title}</h2>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <div className="sidebar_pics">
                <div className="sidebar_pics_title">Images</div>
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
