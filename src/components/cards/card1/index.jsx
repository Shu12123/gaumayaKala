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
          <div className={s.cardTopBanner}>Extra 50% OFF</div>
          <Link to='/product' state={{ img, text, price }}>
            <div className={s.img}>
              <img src={img[index]} alt='product' />
            </div>
          </Link>
          <div className={s.ten}>
            <button type='button' onClick={prevImage} className={s.eleven}>
              <Icon className={s.camera} icon='chevron_backward' />
            </button>
            <button type='button' onClick={nextImage} className={s.eleven}>
              <Icon className={s.cameraNine} icon='chevron_forward' />
            </button>
          </div>
        </div>
      </div>
      <div className={s.mondayOnne}>
        <div className={s.mondayThree}>
          {/* <div>{text.slice(0, 40)}...</div> */}
          <div className={`ellipsis ${s.text}`}>{text}</div>
          <div className={s.hundredSix}>
            <div>
              <div className={s.hundredFive}>
                <Icon className={s.hundredSeven} icon='star' />4 Rating
              </div>
              <div className={s.twelve}>
                <div className={s.third}>{price}</div>
              </div>
              <div>50% OFF</div>
            </div>
            <div className={s.five}>
              <button type='button' className={s.five}>
                <Icon className={s.cameraNew} icon='shopping_bag' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
