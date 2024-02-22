import React from 'react'
import JwtContextProvider from './JwtContext'

function ContextProvider({ children }) {
    return (
        <JwtContextProvider>
            {children}
        </JwtContextProvider>
    )
}

export default ContextProvider