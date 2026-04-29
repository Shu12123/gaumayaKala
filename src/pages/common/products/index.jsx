import s from './styles.module.scss'
import { Cards, Icon } from 'components'
import { cardsData } from 'components/cardDetail'

export default function All_Products() {
  return (
    <div className={s.thirtyOne}>
      <div className={s.thirtyTwo}>
        <div className={s.thirtyTwo_rowOne}>
          <div>ALL PRODUCTS</div>
        </div>
        <div className={s.thirtyTwo_rowTwo_Sec}>
          <div className={s.thirtyTwo_rowTwo}>
            <div className={s.thirtyTwo_rowTwo_partOne}>
              <div className={s.thirtyTwo_rowTwo_colOne}>
                Product Type
                <Icon icon='keyboard_arrow_down' />
              </div>
              <div className={s.thirtyTwo_rowTwo_colOne}>
                Size
                <Icon icon='keyboard_arrow_down' />
              </div>
              <div className={s.thirtyTwo_rowTwo_colOne}>
                Colour/Variant
                <Icon icon='keyboard_arrow_down' />
              </div>
              <div className={s.thirtyTwo_rowTwo_colOne}>
                Price Range
                <Icon icon='keyboard_arrow_down' />
              </div>
              <div className={s.thirtyTwo_rowTwo_collo}>
                <Icon icon='sort' />
                Filter
              </div>
              <div className={s.thirtyTwo_rowTwo_colO}>
                <Icon icon='sort' />
                Sort: Popularity
              </div>
            </div>
          </div>
        </div>
        <div className={s.thirtyTwo_rowThree}>
          <div className={s.thirtyTwo_rowThree_partOne}>
            {cardsData.map((card, i) => (
              <Cards.Card1 {...card} key={card.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
