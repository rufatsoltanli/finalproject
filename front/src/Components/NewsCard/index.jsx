import React from 'react'
import "./style.scss"

function NewsCard({ author, date, tag, header, text, img }) {
    return (
        <div className="newsCard">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="information">
                <div className="author"><i className='fa-solid fa-user'></i>{author}</div>
                <div className="date"><i className="fa-solid fa-calendar-days"></i>{date}</div>
                <div className="tag"><i className='fa-solid fa-tag'></i>{tag}</div>
            </div>
            <div className="cardHeader">{header}</div>
            <div className="text">{text}</div>
        </div>
    )
}

export default NewsCard