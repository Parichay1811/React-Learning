import React from 'react'
import styles from './Main.module.css'
import { useState } from 'react';
function Main() {

    const [isDarkMode, setIsDarkMode] = useState(false)
    const onBtnClick = () =>{
        setIsDarkMode ((prevMode) => !prevMode)
        
    }
  return (
    <div className={isDarkMode ? styles.darkContainer : styles.lightContainer}>
        <button className={styles.btn} onClick={onBtnClick}>
            {isDarkMode ? "Switch to light Mode☀️" : "Switch to dark mode 🌙"}
        </button>
    </div>
  )
}

export default Main