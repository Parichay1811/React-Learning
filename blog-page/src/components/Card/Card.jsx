import React from 'react'
import styles from './Card.module.css'
function Card({title, date, author, category,content, isDarkMode}) {
  return (
    <div className={`card ${isDarkMode ? "dark-card" : ""}`}>
        <h2>{title}</h2>
        <p>{date}</p>
        <p><strong>{author}</strong></p>
        <h5>{category}</h5>.
        <p>{content}</p>
    </div>
  )
}

export default Card