import { Menu01Icon } from 'hugeicons-react'
import { UserIcon } from 'hugeicons-react'

export default function Menu() {
  return (
    <div className="flex p-4 border border-neutral-200 rounded-lg gap-4">
      <Menu01Icon size={24} />
      <UserIcon size={24} />
    </div>
  )
}
