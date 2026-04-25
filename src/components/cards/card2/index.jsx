import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import s from './styles.module.scss'
import { Icon } from 'components'
// import { Icon } from 'components'
const Card = ({ img, name, text, number }) => {
  return (
    <div className={s.fiftyOne}>
      <div className={s.fiftyOneInner}>
        <div className={s.fiftyOneUp}>
          <img
            src={img}
            // src='https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:w-600,f-webp,fo-auto/68bbff7d0f8ea24b58705310/testimonial/Devans%20Singh_2NEHKFQ89J_2025-10-30_1.jpg'
            alt='Product'
          />
        </div>
        <div className={s.fiftyOneDown}>
          <div className={s.downOne}>
            <div>{name}</div>
            <div className={s.peopleRating}>
              {number}
              <Icon icon='star' />
            </div>
            <div className={`ellipsis ${s.verna}`}>
              {text}
              {/* Perfect blend of elegance and purity. You can feel the serenity it brings as soon as it is placed. Very
              impressive quality and absolutely value for money. */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
