import styles from './UserMenu.module.scss'

interface DesktopMenuProps {
  isOpen: boolean
}

function DesktopMenu({ isOpen }: DesktopMenuProps) {
  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open('http://localhost:8080/api/auth/logout', '_self')
  }
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
      <a href="#" onClick={handleSignOut}>
        Sign out
      </a>
    </div>
  )
}

export default DesktopMenu
