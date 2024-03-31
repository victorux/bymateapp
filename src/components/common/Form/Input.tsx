import styles from './Form.module.scss'

interface InputProps {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ label, value, onChange, ...rest }: InputProps) => {
  return (
    <div className={styles.TextField}>
      <input
        className={`${styles.TextField__Input} ${
          value ? styles.Input__isFilled : styles.Input__isEmpty
        }`}
        type="text"
        value={value}
        onChange={onChange}
        {...rest}
      />
      <label
        className={`${styles.TextField__Label} ${
          value ? styles.isFilled : styles.isEmpty
        }`}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
