import React from 'react'
import "./Content.scss"

const Content = ({ bigPic, post }) => {
    // console.log(post);

    return (
        <div className="aside">
            {
                post.slice(-8, -5).map((item, i) => {
                    const picId = item.file_path.slice(1, -4)
                    const picUrl = "https://image.tmdb.org/t/p/w300" + item.file_path
                    return (
                        <div id={picId} className="aside_overlay" key={i}>
                            <div className="aside_overlay_popup">
                                {/* eslint-disable-next-line */}
                                <a href="#" className="aside_overlay_close">&times;</a>
                                <div className="aside_overlay_content">
                                    <img src={picUrl} alt="" />
                                </div>
                            </div>
                        </div>
                    )

                })
            }
            {
                bigPic.map((item, i) => {
                    const picId = item.file_path.slice(1, -4)
                    const picUrl = "https://image.tmdb.org/t/p/w780" + item.file_path
                    return (
                        <div id={picId} className="aside_overlay" key={i}>
                            <div className="aside_overlay_popup">
                                {/* eslint-disable-next-line */}
                                <a href="#" className="aside_overlay_close">&times;</a>
                                <div className="aside_overlay_content">
                                    <img src={picUrl} alt="" />
                                </div>
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Content
