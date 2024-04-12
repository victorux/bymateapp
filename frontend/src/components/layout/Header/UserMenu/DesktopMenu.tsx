import styles from './UserMenu.module.scss'
import { useNavigate } from 'react-router-dom'

interface DesktopMenuProps {
  closeMenu: () => void
  isOpen: boolean
}

function DesktopMenu({ isOpen, closeMenu }: DesktopMenuProps) {
  const navigate = useNavigate()

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open('http://localhost:8080/api/auth/logout', '_self')
  }

  const handleClick = (path: string) => {
    closeMenu()
    navigate(path)
  }

  return (
    <div
      className={`${isOpen ? styles.visible : styles.hidden} ${
        styles.desktopMenu
      }`}
    >
      <div onClick={() => handleClick('/user/1')}>My Profile</div>
      <div onClick={() => handleClick('/my-listings')}>Manage listing</div>
      <div onClick={() => handleClick('/messages')}>Messages</div>
      <div onClick={() => handleClick('/settings')}>Settings</div>
      <div onClick={handleSignOut}>Sign out</div>
    </div>
  )
}

export default DesktopMenu
