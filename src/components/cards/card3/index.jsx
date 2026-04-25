// import React from 'react'
import { Link } from 'react-router-dom'
import s from './styles.module.scss'

const Card3 = ({ img, title, link }) => {
  return (
    <div className={s.collectionClass}>
      <Link to={link}>
        <img src={img} alt='Product' />
        <div className={s.collectionFont}>{title}</div>
      </Link>
    </div>
  )
}

export default Card3
