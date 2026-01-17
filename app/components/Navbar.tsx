import { Logo } from "./Logo"
import { Menu } from "./Menu"

export function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center px-4 md:px-10">
      <Logo />
      <Menu />
    </div>
  )
}
