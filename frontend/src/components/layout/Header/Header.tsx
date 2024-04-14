import Button from '../../common/Buttons/Button'
import Logo from './Logo'
import SearchPanel from './SearchPanel/SearchPanel'
import UserMenu from './UserMenu/UserMenu'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const handleClick = () => {
    alert('Save to Draft and Exit')
  }

  return (
    <div className="border-b-[1px] border-neutral-100">
      <div className="container flex items-center justify-between py-8">
        <Logo />
        {location.pathname.startsWith('/create-listing') ? (
          <Button size="small" border onClick={handleClick}>
            Save to Draft and Exit
          </Button>
        ) : (
          <>
            <SearchPanel />
            <UserMenu />
          </>
        )}
      </div>
    </div>
  )
}
