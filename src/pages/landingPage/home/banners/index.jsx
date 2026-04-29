import { useEffect } from 'react'
import s from './styles.module.scss'

const banners = [
  'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1600,fo-auto/68bbff7d0f8ea24b58705310/template/1769423352569_JO1E3MN0S7_2026-01-26_1.png',
  'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1600,fo-auto/68bbff7d0f8ea24b58705310/template/1769424347817_VDTGRZX4PQ_2026-01-26_1.png',
  'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1600,fo-auto/68bbff7d0f8ea24b58705310/template/1769424347817_YQ2GM7AADX_2026-01-26_2.png',
  'https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1600,fo-auto/68bbff7d0f8ea24b58705310/template/1769426006065_LX13E950EL_2026-01-26_2.png'
]
export default function Banners({ uKey = 'default banner' }) {
  useEffect(() => {
    if (banners.length) {
      const swiper = new window.Swiper('.homeBannersSwiper' + uKey, {
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
          el: '.homeBannersSwiperPagination' + uKey,
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.homeBannersSwiperNext' + uKey,
          prevEl: '.homeBannersSwiperPrev' + uKey
        }
      })

      return () => {
        // if (swiper) swiper.destroy()
      }
    }
  }, [banners.length, uKey])

  return (
    <div className={s.main}>
      <div className={s.banners}>
        {!!banners.length && (
          <div className={`swiper homeBannersSwiper${uKey} ` + s.swiperContainer}>
            <div className='swiper-wrapper'>
              {banners.map((banner, i) => (
                <div className={s.slide + ' swiper-slide'} key={banner + i + uKey}>
                  <div className={s.img}>
                    <img src={banner} />
                  </div>
                </div>
              ))}
            </div>
            {/* <div className={'swiper-button-next homeBannersSwiperNext ' + s.next}></div> */}
            {/* <div className={'swiper-button-prev homeBannersSwiperPrev ' + s.prev}></div> */}
            <div className={`swiper-pagination homeBannersSwiperPagination` + uKey}></div>
          </div>
        )}
      </div>
    </div>
  )
}
