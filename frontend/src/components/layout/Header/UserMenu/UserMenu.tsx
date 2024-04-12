import { useState, useEffect, useRef } from 'react'
import { List, User } from '@phosphor-icons/react'
import styles from './UserMenu.module.scss'
import { COLORS } from '../../../../constants/colors'
import DesktopMenu from './DesktopMenu'
import Button from '../../../common/Buttons/Button'
import { useNavigate } from 'react-router-dom'
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

  const navigate = useNavigate()

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
      <DesktopMenu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </div>
  ) : (
    <Button border onClick={() => navigate('/login')}>
      Sign In
    </Button>
  )
}
