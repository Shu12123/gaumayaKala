import React from 'react'
import s from './styles.module.scss'

export default function Button({
  className = '',
  type = '',
  style = {},
  children,
  onClick,
  disabled = false,
  title = ''
}) {
  return (
    <button
      className={s.button + ' ' + className}
      title={title}
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  )
}
