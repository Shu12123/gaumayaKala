import s from './styles.module.scss'

export default function Footer() {
  return (
    <div className={s.six}>
      <div className={s.seven}>
        <div className={s.eight}>
          <div className={s.rowOne}>
            <div className={s.colOne}>
              <img src='Gaumayakala.webp' alt='' />
              <div className={s.nine}>GAUMAYA KALA</div>
              <div className={s.hundredTen}>
                Elevate your spiritual and living spaces with our exquisite range of pooja essentials and home decor.
                from divine idols and handcrafted lamps to elegant decor accents, every piece adds beauty and posi
              </div>
              <div className={s.hundredTen}>Follow us on</div>
            </div>
            <div className={s.colTwo}>
              Useful Links
              <div>About us</div>
              <div>Privacy Policy</div>
              <div>Return Policy</div>
              <div>Shipping Policy</div>
              <div>Terms and Conditions</div>
            </div>
            <div className={s.colThree}>
              Contact us
              <div>Call us:</div>
              <div>WhatsApp:</div>
              <div>Customer Support: 24/7</div>
              <div>Email: gaumayakala@gmail.com</div>
            </div>
          </div>

          <div className={s.rowTwo}>
            <div>
              Most Search on Store
              <a href='/Best_seller'> Best Seller</a>
              <a href='/poojathali'> Pooja Thali</a>
              <a href='/incense and dhoop'> Incense and Dhoop</a>
              <a href='/popularcollection'> Popular Collection</a>
              <a href='/bin'> Bin</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
