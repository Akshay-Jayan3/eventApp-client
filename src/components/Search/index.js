import React from 'react'
import styles from './style.module.scss'

const Search = ({searchValue,handleSearch}) => {
  return (
    <div className={styles.searchContainer}><form ><input value ={searchValue} type="search" placeholder='Search ' onChange={handleSearch}/></form></div>
  )
}

export default Search