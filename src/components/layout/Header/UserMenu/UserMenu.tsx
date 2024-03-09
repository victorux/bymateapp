import { List, User } from '@phosphor-icons/react'
import styles from './UserMenu.module.scss'
import { COLORS } from '../../../../constants/colors'

export default function Menu() {
  return (
    <div className={styles.MenuButton}>
      <List size={24} color={COLORS.black} />
      <User size={24} color={COLORS.black} />
    </div>
  )
}
