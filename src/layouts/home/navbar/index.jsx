import React, { useEffect, useState } from 'react'
import s from './styles.module.scss'
import { Icon, Search } from 'components'
import { Link } from 'react-router-dom'
const banner = [
  'Extra discouts upto Rs250 at checkout',
  '10%off upto Rs.100!Use coupon code:WOW10|MinOrder899',
  '15% off upto Rs.250!Use coupon code:EXTRA15 Min Order1549',
  'Save Min 50% on all orders and get free shipping'
]
const Header = () => {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false)
  return (
    <header>
      <div className={s.topStrip}>
        <div className={s.container}>
          {/* <div className={s.castleOne}>Extra discouts upto Rs250 at checkout</div> */}
          <div className={s.castleOne}>
            <Ban />
          </div>
        </div>
      </div>
      <div className={s.middleStrip}>
        <div className={s.container}>
          <div className={s.colEleven}>
            <Icon className={s.menuIcon} icon='menu' onClick={() => setIsSideBarOpened(!isSideBarOpened)} />
            <img src='/Gaumayakala.webp' alt='GaumayaKala' />
          </div>
          <div className={s.colTwelve}>
            <Search />
          </div>
          <div className={s.colThirteen}>
            <Order />
          </div>
        </div>
      </div>
      <div className={s.bottomStrip}>
        <Navigation isSideBarOpened={isSideBarOpened} />
      </div>
    </header>
  )
}

export default Header

const Navigation = ({ isSideBarOpened }) => {
  return (
    <nav className={isSideBarOpened ? s.active : ''}>
      <div className={s.conta}>
        <div className={s.hundredTwo}>
          <div className={s.navItem}>
            <Link to='/homedecor'>HOME DECOR</Link>
          </div>
          <div className={s.navItem}>
            <Link to='/cowdung'>COW DUNG PRODUCTS</Link>
          </div>
          <div className={s.navItem}>
            <Link to='/newarrival'>NEW ARRIVAL</Link>
          </div>
          <div className={s.navItem}>
            <Link to='/bestseller'>BEST SELLER</Link>
          </div>
          <div className={s.navItem}>
            <Link to='/about'>ABOUT US</Link>
          </div>
          <div className={s.navItem}>
            <Link to='/allproducts'>ALL PRODUCTS</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

const Order = () => {
  return (
    <div>
      <div className={s.seventyOne}>
        <div className={s.hundredOne + ' ' + s.search}>
          <Icon className={s.iconNO} icon='Search' />
        </div>
        <Link className={s.hundredOne} to='/order'>
          <Icon className={s.icon} icon='person' />
          <div>Order</div>
        </Link>
        <Link className={s.hundredOne} to='/bag'>
          <Icon className={s.icon} icon='shopping_bag' />
          <div>Bag</div>
        </Link>
      </div>
    </div>
  )
}

const Ban = () => {
  useEffect(() => {
    if (banner.length) {
      const swiper = new window.Swiper('.homeBanSwiper', {
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
          el: '.homeBanSwiperPagination',
          clickable: true,
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.homeBanSwiperNext',
          prevEl: '.homeBanSwiperPrev'
        }
      })

      return () => {
        if (swiper) swiper.destroy()
      }
    }
  }, [banner.length])

  return (
    <div className={s.main}>
      <div className={s.banner + ' indent'}>
        {!!banner.length && (
          <div className={'swiper homeBanSwiper ' + s.swiperContainer}>
            <div className='swiper-wrapper'>
              {banner.map((banner, i) => (
                <div className={s.slide + ' swiper-slide'} key={banner + i}>
                  <div className={s.img}>{banner}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
