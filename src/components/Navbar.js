import './Navbar.css'
import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import Searchbar from './Searchbar'
// import { useTheme } from '../hooks/useTheme'
import { ThemeContext } from '../context/ThemeContext'
import { useTheme } from '../hooks/useTheme'


export default function Navbar() {
  const { color } = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
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
