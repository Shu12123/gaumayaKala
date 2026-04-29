import s from './styles.module.scss'
import { useEffect, useState } from 'react'
import { Icon, Search } from 'components'
import { Link } from 'react-router-dom'
import { responsive } from 'helpers'

const labels = [
  'Extra discouts upto Rs250 at checkout',
  '10%off upto Rs.100!Use coupon code:WOW10|MinOrder899',
  '15% off upto Rs.250!Use coupon code:EXTRA15 Min Order1549',
  'Save Min 50% on all orders and get free shipping'
]

export default function Header() {
  const [isSideBarOpened, setIsSideBarOpened] = useState(false)
  const isResponsive = responsive()

  return (
    <header className={s.header}>
      <Labels />
      <div className={s.middle + " indent"}>
        <div className={s.left}>
          {!!isResponsive && <Icon className={s.menuIcon} icon='menu' onClick={() => setIsSideBarOpened(!isSideBarOpened)} />}
          <div className={s.logo}>
            <img src='/Gaumayakala.webp' alt='GaumayaKala' />
          </div>
        </div>
        {!isResponsive && <Search />}
        <div className={s.userActions}>
          {!!isResponsive && <Icon className={s.icon} icon='Search' />}
          <Link className={s.userAction} to='/order'>
            <Icon className={s.icon} icon='person' />
            {!isResponsive ? 'Order' : ""}
          </Link>
          <Link className={s.userAction} to='/bag'>
            <Icon className={s.icon} icon='shopping_bag' />
            {!isResponsive ? 'Bag' : ""}
          </Link>
        </div>
      </div>
      <Navigation isSideBarOpened={isSideBarOpened} />
    </header>
  )
}

const Navigation = ({ isSideBarOpened }) => {
  return (
    <div className={s.navLinksContainer}>
      <nav className={s.navLinks + " indent " + (isSideBarOpened ? s.active : '')}>
        {NavLinks.map((link) => (
          <Link to={link.link} className={s.navItem} key={link.label}>{link.label}</Link>
        ))}
      </nav>
    </div>
  )
}

const NavLinks = [
  {
    label: 'HOME DECOR',
    link: '/homedecor'
  },
  {
    label: 'COW DUNG PRODUCTS',
    link: '/cowdung'
  },
  {
    label: 'NEW ARRIVAL',
    link: '/newarrival'
  },
  {
    label: 'BEST SELLER',
    link: '/bestseller'
  },
  {
    label: 'ABOUT US',
    link: '/'
  },
  {
    label: 'ALL PRODUCTS',
    link: '/products'
  }
]

const Labels = () => {
  useEffect(() => {
    if (labels.length) {
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
  }, [])

  return (
    <div className={s.labelsContainer}>
      <div className={s.labels}>
        {!!labels.length && (
          <div className={'swiper homeBanSwiper ' + s.swiperContainer}>
            <div className='swiper-wrapper'>
              {labels.map((b, i) => (
                <div className={s.slide + ' swiper-slide'} key={b + i}>
                  <span className={s.text + ' ellipsis'}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
