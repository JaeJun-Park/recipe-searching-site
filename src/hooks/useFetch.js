import { useEffect, useState } from "react";

export function useFetch(url, method = "GET") {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState(null)


    const postData = (postdata) => { // create fetch options obj and store it as a state
        setOptions({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postdata)
        })
    }

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async (fetchOptions) => {
            setIsPending(true)
            try {
                const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const json = await res.json()

                setData(json)
                setIsPending(false)
                setError(null)
            } catch (err) {
                if (err.name === 'AbortError') {
                    console.log('the fetch request is aborted')
                } else {
                    setData(null)
                    setIsPending(false)
                    setError(err.message)
                }
            }
        }

        if (method === 'GET') {
            fetchData()
        }
        if (method === 'POST' && options) {
            fetchData(options)
        }

        return () => {
            controller.abort()
        }
    }, [url, method, options])

    return { data, isPending, error, postData }
}