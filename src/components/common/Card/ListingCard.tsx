import { Listing } from '../../../types'
import styles from './Listing.module.scss'

interface ListingCardProps {
  listing: Listing
}

function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__image}
        src={listing.image}
        alt={listing.title}
      />
      <div className={styles.card__wrapper}>
        <h2 className={styles.card__title}>{listing.title}</h2>
        <div className={styles.card__amenities}>
          <span>{listing.listingType}</span>
          <span>{listing.propertyType}</span>
          <span>{listing.available}</span>
        </div>
        <p className={styles.card__price}>€{listing.price}</p>
      </div>
    </div>
  )
}

export default ListingCard
