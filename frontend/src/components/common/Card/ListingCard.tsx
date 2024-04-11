import { Listing } from '../../../types'
import { useNavigate } from 'react-router-dom'
import styles from './Listing.module.scss'

interface ListingCardProps {
  listing: Listing
}

function ListingCard({ listing }: ListingCardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/rooms/${listing.id}`)
  }

  return (
    <div className={styles.card} onClick={handleClick}>
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
        <div className="flex flex-row items-baseline gap-4 flex-wrap font-medium mt-2">
          <p className={styles.card__price}>€{listing.price}/mo</p>
          <span>Bills included</span>
        </div>
      </div>
    </div>
  )
}

export default ListingCard
