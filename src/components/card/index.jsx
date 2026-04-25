import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import s from './styles.module.scss'
import { Icon } from 'components'
const Card = ({ img, text, price }) => {
  const [index, setIndex] = useState(0)

  const nextImage = () => {
    setIndex(prev => (prev + 1) % img.length)
  }

  const prevImage = () => {
    setIndex(prev => (prev - 1 + img.length) % img.length)
  }
  return (
    <div className={s.first}>
      <div className={s.second}>
        <div className={s.mondayTwo}>
          <Link to='/product' state={{ img, text, price }}>
            <img src={img[index]} alt='product' />
          </Link>
          <div className={s.ten}>
            <button type='button' onClick={prevImage} className={s.eleven}>
              <Icon className={s.camera} icon='arrow_back_ios' />
            </button>
            <button type='button' onClick={nextImage} className={s.eleven}>
              <Icon icon='arrow_forward_ios' />
            </button>
          </div>
        </div>
      </div>
      <div className={s.mondayOnne}>
        <div className={s.mondayThree}>
          <div>{text.slice(0, 40)}...</div>
          <div className={s.hundredSix}>
            <div>
              <div className={s.hundredFive}>
                <Icon className={s.hundredSeven} icon='star' />4 Brand Rating
              </div>
              <div className={s.twelve}>
                <div className={s.third}>{price}</div>
              </div>
            </div>
            <div className={s.five}>
              <button type='button' className={s.five}>
                <Icon icon='shopping_bag' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
