import { useState, useEffect, useRef } from 'react'
import { List, User } from '@phosphor-icons/react'
import styles from './UserMenu.module.scss'
import { COLORS } from '../../../../constants/colors'
import DesktopMenu from './DesktopMenu'

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
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

  return (
    <div className="relative" ref={menuRef}>
      <div className={styles.MenuButton} onClick={toggleMenu}>
        <List size={24} color={COLORS.black} />
        <User size={24} color={COLORS.black} />
      </div>
      <DesktopMenu isOpen={isMenuOpen} />
    </div>
  )
}
