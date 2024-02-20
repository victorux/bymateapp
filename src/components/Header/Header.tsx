import Logo from "./Logo";
import SearchPanel from "./SearchPanel/SearchPanel";
import UserMenu from "./UserMenu"


export default function Header() {
  return (
    <div className="container bg-primary-50">
        <Logo />
        <SearchPanel />
        <UserMenu />
    </div>
  )
}
