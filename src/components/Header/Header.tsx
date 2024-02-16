import Logo from "./Logo";
import SearchPanel from "./SearchPanel/SearchPanel";
import UserMenu from "./UserMenu"


export default function Header() {
  return (
    <div>
        <Logo />
        <SearchPanel />
        <UserMenu />
    </div>
  )
}
