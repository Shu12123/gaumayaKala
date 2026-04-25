// import React from 'react'
import { Link } from 'react-router-dom'
import s from './styles.module.scss'

const Card4 = ({ imge, link }) => {
  return (
    <div className={s.categoryClass}>
      <Link to={link}>
        <img src={imge} alt='Product' />
        {/* <div className={s.categoryFont}>{text}</div> */}
      </Link>
    </div>
  )
}

export default Card4
