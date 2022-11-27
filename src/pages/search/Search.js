import './Search.css'

import React from 'react'
import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')
  console.log(queryString)
  console.log(queryParams)
  console.log(query)

  const url = `http://localhost:3000/recipes?q=` + query
  const { data, isPending, error } = useFetch(url)
  console.log(data)
  return (
    <div className="search">
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
