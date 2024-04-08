interface RoundedButtonProps {
  children?: React.ReactNode
  icon?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const RoundedButton = ({ icon, onClick }: RoundedButtonProps) => {
  return (
    <button
      className="rounded-full hover:bg-neutral-100 border hover:border-neutral-500 border-neutral-300 w-10 h-10 flex items-center justify-center"
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export default RoundedButton
