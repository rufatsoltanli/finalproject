import React from 'react'
import "./style.scss"

function CommonTitle({ smalltext, maintext }) {
    return (
        <>
            <div className="commonTitle">
                <div className="mainText">
                    {maintext}
                </div>
                <div className="smallText">
                    {smalltext}
                </div>
            </div>
        </>
    )
}

export default CommonTitle