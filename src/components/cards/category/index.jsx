import { Link } from 'react-router-dom'
import s from './styles.module.scss'

const Category = ({ image, link }) => {
  return (
    <div className={s.categoryClass}>
      <Link to={link}>
        <img src={image} alt='Product' />
      </Link>
    </div>
  )
}

export default Category
