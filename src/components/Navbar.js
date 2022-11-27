import './Navbar.css'
import { Link } from 'react-router-dom'
import React from 'react'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link className="brand" to="/">
          <h1>Home</h1>
        </Link>
        <Searchbar />
        <Link to="/create">{'Create Recipe'}</Link>
      </nav>
    </div>
  )
}
