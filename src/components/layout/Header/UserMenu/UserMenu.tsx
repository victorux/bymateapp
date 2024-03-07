import { Menu01Icon } from 'hugeicons-react'
import { UserIcon } from 'hugeicons-react'
import styles from './UserMenu.module.scss'

export default function Menu() {
  return (
    <div className={styles.MenuButton}>
      <Menu01Icon size={24} />
      <UserIcon size={24} />
    </div>
  )
}
