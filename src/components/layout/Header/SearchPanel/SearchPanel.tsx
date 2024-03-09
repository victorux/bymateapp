import styles from './SearchPanel.module.scss'

export default function SearchPanel() {
  return (
    <div className={styles.container}>
      <div>
        <input type="text" placeholder="Search" />
      </div>
      <div>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
      <div className={styles.search__button}>
        <p>Search Icon</p>
      </div>
    </div>
  )
}
