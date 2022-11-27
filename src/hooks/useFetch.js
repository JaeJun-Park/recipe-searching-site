import { useState, useEffect } from 'react'

export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState(null)

  const postData = (postData) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
  }

  useEffect(() => {
    const controller = new AbortController()
    
    const fetchData = async (fetchOptions = null) => {
      try {
        const res = await fetch(url, { ...fetchOptions, signal: controller.signal })
        if (!res.ok) throw new Error(res.statusText)
        const json = await res.json()

        setIsPending(false)
        setData(json)
        setError(null)
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('the fetch was aborted')
        } else {
          setIsPending(false)
          setError('Could not fetch the data')
        }
      }
    }

    if (method == 'GET') {
      fetchData()
    }
    if (method == 'POST' && options) { // once we have options then, we can call fetch data with those options
      fetchData(options)
    }


    return () => {
      controller.abort()
    }
  }, [url, options, method])

  return { data, isPending, error, postData }
}
