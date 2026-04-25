import React from 'react'
// import "./search.scss"
import s from './styles.module.scss'
import { Icon } from 'components'

const Search = () => {
  return (
    <div className={s.searchBox}>
      <div className={s.castleTwo}>
        <Icon icon='search' />
        <input type='text' placeholder='Search GAUMAYA KALA' />
      </div>
    </div>
  )
}

export default Search
