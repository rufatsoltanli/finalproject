import React from 'react'
import JwtContextProvider from './JwtContext'
import WishlistProvider from './WishlistContext'

function ContextProvider({ children }) {
    return (
        <JwtContextProvider>
            <WishlistProvider>
                {children}
            </WishlistProvider>
        </JwtContextProvider>
    )
}

export default ContextProvider