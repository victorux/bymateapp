interface RoundedButtonProps {
  children?: React.ReactNode
  icon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const RoundedButton = ({ icon, onClick }: RoundedButtonProps) => {
  return (
    <button
      className="rounded-full hover:bg-neutral-100 border p-3 border-neutral-300 flex items-center justify-center"
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export default RoundedButton
