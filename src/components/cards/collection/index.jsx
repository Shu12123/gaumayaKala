import { Link } from 'react-router-dom'
import s from './styles.module.scss'

const Collection = ({ img, title, link }) => {
  return (
    <Link to={link} className={s.collectionClass}>
      <img src={img} alt='Product' />
      <div className={s.collectionFont}>{title}</div>
    </Link>
  )
}

export default Collection
