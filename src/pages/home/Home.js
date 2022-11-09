import './Home.css'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

export default function Home() {
  const url = 'http://localhost:3000/recipes'
  const { data, isPending, error } = useFetch(url)
  console.log(data);
  return (
    <div className="home">
      {isPending && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}
