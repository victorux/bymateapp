import styles from './Form.module.scss'
interface CustomRadioProps {
  label: string
  icon: JSX.Element
  selected: boolean
  onClick?: () => void
}

const CustomCheckButton = ({
  label,
  icon,
  selected,
  onClick,
}: CustomRadioProps) => {
  return (
    <div
      className={`${styles.custom_radio} ${
        selected ? styles.selected : styles.none_selected
      }`}
      onClick={onClick}
    >
      <div className="icon">{icon}</div>
      <div className="title">{label}</div>
    </div>
  )
}

export default CustomCheckButton
