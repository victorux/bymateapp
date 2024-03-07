import Logo from './Logo'
import SearchPanel from './SearchPanel/SearchPanel'
import UserMenu from './UserMenu/UserMenu'

export default function Header() {
  return (
    <div className="border-b-[1px] border-neutral-100">
      <div className="container flex items-center justify-between py-8">
        <Logo />
        <SearchPanel />
        <UserMenu />
      </div>
    </div>
  )
}
