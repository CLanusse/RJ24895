import { useEffect, useState } from "react"




export const useFetch = (url, dep = []) => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((resp) => {
                setData(resp)
            })
    }, dep)

    return ({data})
}