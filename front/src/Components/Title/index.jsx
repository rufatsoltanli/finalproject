import React from 'react'

function CommonTitle({ smalltext, maintext }) {
    return (
        <>
            <div className="mainText">
                {maintext}
            </div>
            <div className="smallText">
                {smalltext}
            </div>
        </>
    )
}

export default CommonTitle