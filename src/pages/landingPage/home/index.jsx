import s from './styles.module.scss'
import { useEffect } from 'react'
import { Button, Cards } from 'components'
import { responsive } from 'helpers'
import { collections, products, categories, feedbacks } from 'data'
import Banners from './banners'

export default function Home() {
  return (
    <div className={s.home + ' indent'}>
      <Banners />
      <div className={s.homeHeader}>
        <div className={s.homeContent}> OUR COLLECTIONS</div>
        <div className={s.collectCard}>
          {collections.map(card => (
            <Cards.Collection {...card} key={card.title} />
          ))}
        </div>
      </div>
      <div className={s.homeHeader}>
        <div className={s.homeContent}>ALL PRODUCTS</div>
        <div className={s.cardHead}>
          {products.map((card, i) => (
            <Cards.Product {...card} key={card.text + i} />
          ))}
        </div>
        {/* <button className={s.btn}>View All</button> */}
        <Button className={s.btn}>View All</Button>
      </div>
      <div className={s.homeHeader}>
        <div className={s.homeContent}>Shop By Category</div>
        <div className={s.categoryCard}>
          {categories.map(card => (
            <Cards.Category {...card} key={card.image} />
          ))}
        </div>
      </div>
      <div className={s.homeHeader}>
        <div className={s.homeContent}>AMAZING DEALS</div>
        <div className={s.cardHead}>
          {products.map((card, i) => (
            <Cards.Product {...card} key={card.text + i + card.img} />
          ))}
        </div>
        <button className={s.btn}>View All</button>
      </div>
      <Banners uKey='bannerSection2' />
      <div className={s.homeHeader}>
        <div className={s.homeContent}>CUSTOMER FEEDBACK</div>
        <div className={s.customerCard}>
          <MovingSlider />
        </div>
      </div>
    </div>
  )
}
const MovingSlider = () => {
  const isResponsive = responsive()

  useEffect(() => {
    if (feedbacks.length) {
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
  }, [feedbacks.length, isResponsive])

  return (
    <div className={s.main}>
      <div className={s.cardsData2 + ' indent'}>
        {!!feedbacks.length && (
          <div className={'swiper homeMovingSliderSwiper ' + s.swiperContainer}>
            <div className='swiper-wrapper'>
              {feedbacks.map((c, i) => (
                <div className={s.slide + ' swiper-slide'} key={c.img + i}>
                  <Cards.Feedback {...c} />
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
