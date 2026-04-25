import NavBar from './navbar'
import Footer from './footer'
import s from './styles.module.scss'

export default function Main({ children }) {
  return (
    <>
      <div className={s.main}>
        <NavBar />
        <div className={s.content}>{children}</div>
      </div>

      <Footer />
    </>
  )
}
