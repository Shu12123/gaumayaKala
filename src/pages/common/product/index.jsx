import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
// import "./product.scss";
import s from './styles.module.scss'
import { head, responsive } from 'helpers'
import { Icon } from 'components'

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    head({ title: 'My Products | Gaumaya Kala' })
  }, [])

  const location = useLocation()
  const { img, text, price } = location.state || {}

  const [selectedImage, setSelectedImage] = useState(0)
  const isResponsive = responsive()

  return (
    <div className={s.thirteen}>
      <div className={s.forteen}>
        <div className={s.fifteen_colOne}>
          {/* <div className={s.imageInsider}> */}
          {img?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt='thumb'
              onClick={() => setSelectedImage(index)}
              style={{
                border: selectedImage === index ? '1px solid black' : '1px solid #ccc'
              }}
            />
          ))}
          {/* </div> */}
        </div>
        <div className={s.sixteen_colTwo}>
          <img src={img?.[selectedImage]} alt='product' />
        </div>
        <div className={s.imageInside}>
          <ResponsivePage img={img} />
        </div>
        <div className={s.upperFixed}>
          <div className={s.fixedButton}>
            <button className={s.impButton}>Add to Bag</button>
            <button className={s.impButton}>Buy Now</button>
          </div>
        </div>
        <div className={s.seventeen_colThree}>
          <div className={s.eighteen}>
            <div className={s.spaceBottom}>
              <div>{text}</div>
              <div className={s.shareIcon}>
                <Icon icon='share' />
              </div>
            </div>
            <div className={s.eOne}>
              <Icon icon='star' />4 Brand Rating
            </div>
            <div className={s.nineteen}>
              {price}
              {/* <Icon className={s.importantIcon} icon='currency_rupee' /> */}
            </div>
            <div className={s.twenty}>
              <div className={s.buttonOne}>
                <div className={s.confirmIcon}>
                  <Icon icon='confirmation_number' /> Get this as low as
                </div>
                <div className={s.rupeeIcon}>
                  <Icon icon='currency_rupee ' />
                  199
                </div>
              </div>
            </div>
            <div className={s.infoIcon}>
              <div>
                <Icon icon='info' />
              </div>
              <div> Final Price inclusive of all taxes</div>
            </div>
            <div className={s.twentyOne}>
              <div className={s.twentyOne_rowOne}>
                <div className={s.outertwentyOne_colOne}>
                  <div className={s.twentyOne_colOne}>
                    <Icon icon='currency_rupee' />
                    <div className={s.cashOn}>Cash on Delivery</div>
                  </div>
                </div>
                <div className={s.outertwentyOne_colTwo}>
                  <div className={s.twentyOne_colTwo}>
                    <Icon icon='sync_alt' />
                    <div className={s.returnOn}>Return or Exchange within 3 days</div>
                  </div>
                </div>
                <div className={s.outertwentyOne_colThree}>
                  <div className={s.twentyOne_colThree}>
                    <Icon icon='delivery_truck_speed' />
                    <div className={s.freeDeli}>Free Delivery</div>
                  </div>
                </div>
              </div>
              <div className={s.twentyOne_rowTwo}>
                <div> Get it delivered within 3-6 days</div>
              </div>
            </div>
            <div className={s.twentyTwo}>
              {/* <button type='button'>Add to Bag</button> */}
              <button className={s.btnon}>Add to Bag</button>
            </div>
            <div className={s.twentyThree}>
              {/* <button type='button'>Buy Now</button> */}
              <button className={s.btnon}>Buy Now</button>
            </div>

            <div className={s.twenty_Four}>
              <p>Size</p>
              <div className={s.twenty_Four_Size}>
                <button type='button'>Free Size</button>
              </div>
            </div>
            <div className={s.twentyFives}>
              <div className={s.twentyFives_mainOne}>
                <p>Product Information</p>
                <div className={s.twentyFives_rOne}>
                  <div className={s.twentyFives_cOne}>Brand</div>
                  <div className={s.twentyFives_cTwo}>Gaumaya Kala</div>
                </div>
                <div className={s.twentyFives_rOne}>
                  <div className={s.twentyFives_cOne}>Country_of_origin</div>
                  <div className={s.twentyFives_cTwo}>India</div>
                </div>
                <div className={s.twentyFives_rOne}>
                  <div className={s.twentyFives_cOne}>Usage Instructions</div>
                  <div className={s.twentyFives_cTwo}>Pooja</div>
                </div>
                <div className={s.twentyFives_rOne}>
                  <div className={s.twentyFives_cOne}>Product Type</div>
                  <div className={s.twentyFives_cTwo}>Samrani Cups, Divya Deep, Aangan Premium dhoop cones</div>
                </div>
                <div className={s.twentyFives_rOne}>
                  <div className={s.twentyFives_cOne}>Material</div>
                  <div className={s.twentyFives_cTwo}>Cow Dung</div>
                </div>
              </div>

              <div className={s.twentyFives_mainTwo}>
                <div>Product Description</div>
                <div className={s.productBrief}>
                  Temple Energy Combo 🕉️
                  <br />
                  ✨ Perfect for: Home temples • Daily puja • Meditation • Spiritual gifting
                  <br />
                  <br />
                  Invite divine blessings and sacred energy into your home with the Temple Energy Combo. Thoughtfully
                  curated for home temples and daily prayers, this set brings together a beautifully crafted Divye Murti
                  with the calming fragrance of Pranah Sticks to create a spiritually uplifting atmosphere.
                  <br />
                  <br />
                  What’s Inside:
                  <br />
                  <br />
                  Divye Murti – A sacred idol designed to bring devotion, positivity, and divine presence to your home
                  temple.
                  <br />
                  <br />
                  Pranah Sticks – Natural incense that purifies the surroundings and enhances focus during prayer and
                  meditation.
                  <br />
                  <br />
                  Rooted in traditional Indian spiritual practices, this combo helps create a peaceful, satvik
                  environment for your daily puja rituals and moments of devotion.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product

const ResponsivePage = ({ img }) => {
  useEffect(() => {
    if (img?.length) {
      const swiper = new window.Swiper('.homeResponsivePageSwiper', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        // aotoplay: false,
        pagination: {
          el: '.homeResponsivePageSwiperPagination',
          clickable: true
        }
      })

      return () => swiper?.destroy()
    }
  }, [img])

  return (
    <div className={s.main}>
      <div className={s.img}>
        {!!img?.length && (
          <div className={`swiper homeResponsivePageSwiper ${s.swiperContainer}`}>
            <div className='swiper-wrapper'>
              {img.map((image, i) => (
                <div className={`${s.slide} swiper-slide`} key={i}>
                  <img src={image} alt={`slide-${i}`} />
                </div>
              ))}
            </div>
            <div className='swiper-pagination homeResponsivePageSwiperPagination'></div>
          </div>
        )}
      </div>
    </div>
  )
}
