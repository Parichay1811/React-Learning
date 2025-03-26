import React from 'react'
import styles from './Nav.module.css'
import Search from '../Searchbar/Search'
function Nav() {
  return (
    <nav>
        <div>
            <h2>Logo</h2>
        </div>
        <div>
            <Search/>
        </div>
        <button>Login</button>
    </nav>
  )
}

export default Nav