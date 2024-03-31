import styles from './Form.module.scss'

interface CustomRadioProps {
  title: string
  description: string
  icon: JSX.Element
  selected: boolean
  onClick: () => void
}

const CardButton = ({
  title,
  icon,
  selected = false,
  description,
  onClick,
}: CustomRadioProps) => {
  return (
    <div
      className={`${styles.card_button} ${
        selected ? styles.selected : styles.none_selected
      }`}
      onClick={onClick}
    >
      <div>
        <div className="title">{title}</div>
        <p className="font-body text-base font-normal text-neutral-500">
          {description}
        </p>
      </div>
      <div className="icon">{icon}</div>
    </div>
  )
}

export default CardButton
