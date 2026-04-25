import React, { useEffect, useRef } from 'react'
// import './basepanel.scss'
import s from './styles.module.scss'
const banners = [
  'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1600,fo-auto/68bbff7d0f8ea24b58705310/template/1769423352569_JO1E3MN0S7_2026-01-26_1.png',
  'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1600,fo-auto/68bbff7d0f8ea24b58705310/template/1769424347817_VDTGRZX4PQ_2026-01-26_1.png',
  'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1600,fo-auto/68bbff7d0f8ea24b58705310/template/1769424347817_YQ2GM7AADX_2026-01-26_2.png',
  'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1600,fo-auto/68bbff7d0f8ea24b58705310/template/1769426006065_LX13E950EL_2026-01-26_2.png'
]
const Banners = () => {
  useEffect(() => {
    if (banners.length) {
      const swiper = new window.Swiper('.homeBannersSwiper', {
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
          el: '.homeBannersSwiperPagination',
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.homeBannersSwiperNext',
          prevEl: '.homeBannersSwiperPrev'
        }
      })

      return () => {
        if (swiper) swiper.destroy()
      }
    }
  }, [banners.length])

  return (
    <div className={s.main}>
      <div className={s.banners + ' indent'}>
        {!!banners.length && (
          <div className={'swiper homeBannersSwiper ' + s.swiperContainer}>
            <div className='swiper-wrapper'>
              {banners.map((banner, i) => (
                <div className={s.slide + ' swiper-slide'} key={banner + i}>
                  <div className={s.img}>
                    <img src={banner} />
                  </div>
                </div>
              ))}
            </div>
            {/* <div className={'swiper-button-next homeBannersSwiperNext ' + s.next}></div> */}
            {/* <div className={'swiper-button-prev homeBannersSwiperPrev ' + s.prev}></div> */}
            <div className='swiper-pagination homeBannersSwiperPagination'></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Banners
