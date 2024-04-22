import styles from './UserMenu.module.scss'
import { useNavigate } from 'react-router-dom'

interface DesktopMenuProps {
  closeMenu: () => void
  isOpen: boolean
  user: { id: string }
}

function DesktopMenu({ isOpen, closeMenu, user }: DesktopMenuProps) {
  const navigate = useNavigate()

  const handleSignOut = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open(
      'https://bymate-server-874ca7821918.herokuapp.com/api/auth/logout',
      '_self'
    )
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
      <div onClick={() => handleClick(`/user/${user.id}/profile`)}>
        My Profile
      </div>
      <div onClick={() => handleClick('/my-listings')}>Manage listing</div>
      <div onClick={() => handleClick('/messages')}>Messages</div>
      <div onClick={() => handleClick('/settings')}>Settings</div>
      <div onClick={handleSignOut}>Sign out</div>
    </div>
  )
}

export default DesktopMenu
