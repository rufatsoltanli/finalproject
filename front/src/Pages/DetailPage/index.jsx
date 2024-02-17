import React from 'react'
import { useParams } from 'react-router-dom'

function DetailPage() {
    const { id } = useParams()
    return (
        <div>DetailPage</div>
    )
}

export default DetailPage