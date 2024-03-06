/// <reference types="vite-plugin-svgr/client" />
import MenuIcon from '../../../assets/icons/menu.svg?react'
import UserIcon from '../../../assets/icons/user.svg?react'

export default function Menu() {
  return (
    <div>
      <MenuIcon width={24} height={24} />
      <UserIcon width={24} height={24} />
    </div>
  )
}
