import { MagnifyingGlass } from '@phosphor-icons/react'
import styles from './SearchPanel.module.scss'
// import { MagnifyingGlass } from '@phosphor-icons/react'

export default function SearchPanel() {
  return (
    <form className={styles.form}>
      {/* Location */}
      <div className="flex-grow flex items-center justify-center hover:bg-neutral-100 rounded-full transition">
        <label htmlFor="search" className="pl-6">
          <span className={styles.title}>Where</span>
          <input
            id="search"
            type="text"
            className={styles.search__input}
            placeholder="Search"
          />
        </label>
      </div>
      {/* Divider */}
      <div className={styles.divider}>
        <span></span>
      </div>
      {/* Type of Ad */}
      <div className={styles.what__container}>
        <span className={styles.title}>What</span>
        <div>Room</div>
      </div>
      {/* Button */}
      <button className={styles.button}>
        <MagnifyingGlass size={24} color="#fff" />
      </button>
    </form>
  )
}
