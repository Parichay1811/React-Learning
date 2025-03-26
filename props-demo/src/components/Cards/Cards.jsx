import React from 'react'
import styles from './Cards.module.css'
function Cards({photo, name, age, occupation}) {
  return (
    <div className={styles.card} >
        <img src={photo} alt={name} className={styles.image}/>
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{occupation}</p>
    </div>
  )
}

export default Cards