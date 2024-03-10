import styles from './UserMenu.module.scss'

interface DesktopMenuProps {
  isOpen: boolean
}

function DesktopMenu({ isOpen }: DesktopMenuProps) {
  return (
    <div
      className={`${isOpen ? styles.visible : styles.hidden} ${
        styles.desktopMenu
      }`}
    >
      <a href="/">Profile</a>
      <a href="/">Settings</a>
      <a href="/">Sign out</a>
    </div>
  )
}

export default DesktopMenu
