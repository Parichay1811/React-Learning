import React from 'react'
import styles from './Search.module.css'
import { FaSearch } from "react-icons/fa";
function Search() {
  return (
    <div className={styles.searchContainer}>
        <input type="text" placeholder='Search here...' />
        <button className={styles.btn} ><FaSearch /></button>
    </div>
  )
}

export default Search