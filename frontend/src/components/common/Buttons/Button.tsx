import styles from './Button.module.scss'

interface ButtonProps {
  children: string
  onClick: () => void
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary'
  disabled?: boolean
  border?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  rounded?: 'rounded-md' | 'rounded-full'
}

function Button({
  children,
  onClick,
  size,
  color,
  disabled,
  border,
  rounded,
  icon,
  iconPosition = 'left',
}: ButtonProps) {
  const classNames = disabled
    ? `${styles.Button} ${styles.disabled} ${styles[size || 'medium']} ${
        styles[rounded || 'rounded-md']
      }`
    : `${styles.Button} ${styles[rounded || 'rounded-md']} ${
        styles[size || 'medium']
      } ${styles[color || 'transparent']} ${
        styles[border ? 'border' : 'no-border']
      }`
  return (
    <button
      disabled={disabled}
      type="button"
      className={classNames}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  )
}

export default Button
