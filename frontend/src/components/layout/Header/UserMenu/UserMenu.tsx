import { useState, useEffect, useRef } from 'react'
import { List, SignIn, User } from '@phosphor-icons/react'
import styles from './UserMenu.module.scss'
import { COLORS } from '../../../../constants/colors'
import DesktopMenu from './DesktopMenu'
import { useUserContext } from '../../../../hooks/useUserContext'

// import axios from 'axios'

export default function Menu() {
  const { user, getUserAndUpdate } = useUserContext()

  // const [user, setUser] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    getUserAndUpdate()
  }, [])

  return user ? (
    <div className="relative" ref={menuRef}>
      <div className={styles.MenuButton} onClick={toggleMenu}>
        <List size={24} color={COLORS.black} />
        <User size={24} color={COLORS.black} />
      </div>
      <DesktopMenu user={user} isOpen={isMenuOpen} closeMenu={closeMenu} />
    </div>
  ) : (
    <div className="flex flex-row gap-2">
      <SignIn size={24} /> <a href="/login">Login</a>
    </div>
  )
}
