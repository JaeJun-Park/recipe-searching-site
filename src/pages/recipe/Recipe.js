import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Recipe.css'

function Recipe(props) {
  const { id } = useParams()

  const { data: recipe, isPending, error } = useFetch(`http://localhost:3000/recipes/${id}`)

  return (
    <div className="recipe">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe
