import styles from './home.module.scss'
import ListingCard from '../../common/Card/ListingCard'

const listings = [
  {
    id: '2',
    title: 'Spacious Studio Apartment',
    description: 'A spacious studio apartment with a beautiful view.',
    price: 1200,
    image:
      'https://randomwordgenerator.com/img/picture-generator/53e3d4434e50b10ff3d8992cc12c30771037dbf852547848702e7edc9648_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '3',
    title: 'Luxury Penthouse Suite',
    description: 'Experience luxury living in this stunning penthouse suite.',
    price: 3000,
    image:
      'https://randomwordgenerator.com/img/picture-generator/5fe6d7444256b10ff3d8992cc12c30771037dbf85254794074297ed0934d_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '4',
    title: 'Charming Cottage',
    description: 'Escape to this charming cottage in the countryside.',
    price: 800,
    image:
      'https://randomwordgenerator.com/img/picture-generator/55e3d3414855a514f1dc8460962e33791c3ad6e04e5074417c2f7dd6974dc7_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '5',
    title: 'Modern Townhouse',
    description:
      'Live in style in this modern townhouse with all the amenities.',
    price: 2000,
    image:
      'https://randomwordgenerator.com/img/picture-generator/55e9d0434e5bb10ff3d8992cc12c30771037dbf85257714b752c7bd49e45_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '5',
    title: 'Modern Townhouse',
    description:
      'Live in style in this modern townhouse with all the amenities.',
    price: 2000,
    image:
      'https://randomwordgenerator.com/img/picture-generator/50e2dc464e4faa0df7c5d57bc32f3e7b1d3ac3e45658724e77267bd493_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
]

export default function FeaturedSection() {
  return (
    <div className="container text-center mt-20">
      <div className={styles.section__heading}>Featured Rooms</div>
      <div className="grid grid-cols-5 gap-10 mt-10">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  )
}
