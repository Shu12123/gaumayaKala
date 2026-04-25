import React, { useEffect, useState } from 'react'
// import './frontpage.scss'
import s from './styles.module.scss'

import { Card, Cards } from 'components'
import Banners from './banners'
import { cardsData, cardsData2, cardsData3, cardsData4 } from 'components/cardDetail'
import { responsive } from 'helpers'

export default function Home() {
  const isResponsive = responsive()
  return (
    <div>
      <Banners />
      {/* <Banners /> */}

      <div className={s.labelOne}>
        <div className={s.tuesday}> OUR COLLECTIONS</div>
        <div className={s.collectCard}>
          {cardsData3.map((card, i) => (
            <Cards.Card3 {...card} key={card.text} />
          ))}
        </div>
        {/* <button className={s.btn}>View All</button> */}
      </div>
      <div className={s.labelOne}>
        <div className={s.tuesday}>ALL PRODUCTS</div>
        <div className={s.forth}>
          {cardsData.map((card, i) => (
            <Cards.Card1 {...card} key={card.text} />
          ))}
        </div>
        <button className={s.btn}>View All</button>
      </div>
      <div className={s.labelOne}>
        <div className={s.tuesday}>Shop By Category</div>
        <div className={s.categoryCard}>
          {cardsData4.map((card, i) => (
            <Cards.Card4 {...card} key={card.text} />
          ))}
        </div>
        {/* <button className={s.btn}>View All</button> */}
      </div>
      <div className={s.labelOne}>
        <div className={s.tuesday}>AMAZING DEALS</div>
        <div className={s.forth}>
          {cardsData.map((card, i) => (
            <Cards.Card1 {...card} key={card.text} />
          ))}
        </div>
        <button className={s.btn}>View All</button>
      </div>
      <div className={s.labelOne}>
        <div className={s.tuesday}>CUSTOMER FEEDBACK</div>
        <div className={s.forthing}>
          {/* {cardsData2.map((card, i) => (
            <Cards.Card2 {...card} key={i} />
          ))} */}
          <MovingSlider />
        </div>
      </div>
    </div>
  )
}
const MovingSlider = () => {
  const isResponsive = responsive()
  useEffect(() => {
    if (cardsData2.length) {
      const swiper = new window.Swiper('.homeMovingSliderSwiper', {
        slidesPerView: isResponsive ? 1 : 3,
        spaceBetween: isResponsive ? 0 : 30,
        loop: true,
        lazy: true,
        preloadImages: false,
        autoplay: {
          delay: 5000, // Adjust as needed
          disableOnInteraction: false
        },
        // autoplay: false,
        pagination: {
          el: '.homeMovingSliderSwiperPagination',
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.homeMovingSliderSwiperNext',
          prevEl: '.homeMovingSliderSwiperPrev'
        }
      })

      return () => {
        if (swiper) swiper.destroy()
      }
    }
  }, [cardsData2.length, isResponsive])

  return (
    <div className={s.main}>
      <div className={s.cardsData2 + ' indent'}>
        {!!cardsData2.length && (
          <div className={'swiper homeMovingSliderSwiper ' + s.swiperContainer}>
            <div className='swiper-wrapper'>
              {cardsData2.map((c, i) => (
                <div className={s.slide + ' swiper-slide'} key={c.img + i}>
                  <Cards.Card2 {...c} />
                </div>
              ))}
            </div>
            {/* <div className={'swiper-button-next homeMovingSliderSwiperNext ' + s.next}></div> */}
            {/* <div className={'swiper-button-prev homeMovingSliderSwiperPrev ' + s.prev}></div> */}
            <div className='swiper-pagination homeMovingSliderSwiperPagination'></div>
          </div>
        )}
      </div>
    </div>
  )
}

const Moving = ({ imge }) => {
  // const isResponsive = responsive()
  useEffect(() => {
    if (cardsData4.length) {
      const swiper = new window.Swiper('.homeMovingSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        lazy: true,
        preloadImages: false,
        autoplay: {
          delay: 5000, // Adjust as needed
          disableOnInteraction: false
        },
        // autoplay: false,
        pagination: {
          el: '.homeMovingSwiperPagination',
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.homeMovingSwiperNext',
          prevEl: '.homeMovingSwiperPrev'
        }
      })

      return () => {
        if (swiper) swiper.destroy()
      }
    }
  }, [cardsData4.length])

  return (
    <div className={s.main}>
      <div className={s.cardsData4 + ' indent'}>
        {!!cardsData4.length && (
          <div className={'swiper homeMovingSwiper ' + s.swiperContainer}>
            <div className='swiper-wrapper'>
              {cardsData4.map((c, i) => (
                <div className={s.slide + ' swiper-slide'} key={c.imge + i}>
                  <Cards.Card4 {...c} />
                </div>
              ))}
            </div>
            {/* <div className={'swiper-button-next homeMovingSwiperNext ' + s.next}></div> */}
            {/* <div className={'swiper-button-prev homeMovingSwiperPrev ' + s.prev}></div> */}
            <div className='swiper-pagination homeMovingSwiperPagination'></div>
          </div>
        )}
      </div>
    </div>
  )
}
