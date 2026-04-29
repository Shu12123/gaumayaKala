import s from './styles.module.scss'
import { Icon } from 'components'

const Feedback = ({ img, name, text, number }) => {
  return (
    <div className={s.fiftyOne}>
      <div className={s.fiftyOneInner}>
        <div className={s.fiftyOneUp}>
          <img
            src={img}
            alt='Product'
          />
        </div>
        <div className={s.fiftyOneDown}>
          <div className={s.downOne}>
            <div>{name}</div>
            <div className={s.peopleRating}>
              {number}
              <Icon icon='star' />
            </div>
            <div className={`ellipsis ${s.verna}`}>
              {text}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
