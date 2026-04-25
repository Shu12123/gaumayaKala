import s from './styles.module.scss'

export default function Main({
  icon,
  onClick,
  filled = false,
  className = '',
  iconAlt = false,
  style = {},
  title = ''
}) {
  return (
    <span
      className={s.main + ' ' + className}
      onClick={
        onClick
          ? async (...args) => {
              onClick(...args)
            }
          : undefined
      }
      style={{ cursor: onClick && 'pointer' }}
      title={title}
    >
      {!iconAlt && (
        <span
          className={'material-symbols-outlined ' + s.icon + (filled ? ' material-symbols-outlined-filled ' : ' ')}
          style={style}
        >
          {icon}
        </span>
      )}
      {!!iconAlt && <i className={icon + ' ' + className + ' ' + s.icon}></i>}
    </span>
  )
}
