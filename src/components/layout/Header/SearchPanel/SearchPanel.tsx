import styles from './SearchPanel.module.scss'
import { MagnifyingGlass } from '@phosphor-icons/react'

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
        <MagnifyingGlass size={24} color="#ffffff" />
      </div>
    </div>
  )
}
