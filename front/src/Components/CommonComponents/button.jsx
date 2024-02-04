import React from 'react'
import "./style.scss"

function Button({ children }) {
    return (
        <>
            <div className="commonButton">
                {children}
            </div>
        </>
    )
}

export default Button