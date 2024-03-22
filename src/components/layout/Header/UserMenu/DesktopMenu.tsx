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
      <a href="/user/1">Profile</a>
      <a href="/my-listings">Manage listing</a>
      <a href="/messages">Messages</a>
      <a href="/settings">Settings</a>
      <a href="/">Sign out</a>
    </div>
  )
}

export default DesktopMenu
