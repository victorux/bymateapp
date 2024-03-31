import styles from './Form.module.scss'
interface CustomRadioProps {
  title: string
  icon: JSX.Element
  selected: boolean
  onClick: () => void
}

const CustomRadioButton = ({
  title,
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
      <div className="title">{title}</div>
    </div>
  )
}

export default CustomRadioButton
