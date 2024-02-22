
import React, { useEffect, useState } from 'react'

function useLocalStorage(key, initVal = "") {
    const [data, setData] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initVal)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data))
    }, [data])


    return [data, setData]
}

export default useLocalStorage