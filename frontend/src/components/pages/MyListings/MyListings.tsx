import Button from '../../common/Buttons/Button'
import { CaretDown, Eye, Plus } from '@phosphor-icons/react'
import styles from './MyListings.module.scss'
import { COLORS } from '../../../constants/colors'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useUserContext } from '../../../hooks/useUserContext'

const data = [
  {
    id: '1',
    views: 144,
    title: 'Spacious Studio Apartment',
    description: 'A spacious studio apartment with a beautiful view.',
    price: 1200,
    beds: 3,
    baths: 1,
    image:
      'https://randomwordgenerator.com/img/picture-generator/53e3d4434e50b10ff3d8992cc12c30771037dbf852547848702e7edc9648_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
  {
    id: '2',
    views: 144,
    title: 'Spacious Studio Apartment',
    description: 'A spacious studio apartment with a beautiful view.',
    price: 1200,
    beds: 3,
    baths: 1,
    image:
      'https://randomwordgenerator.com/img/picture-generator/53e3d4434e50b10ff3d8992cc12c30771037dbf852547848702e7edc9648_640.jpg',
    listingType: 'Entire Place',
    propertyType: 'Apartment',
    available: 'Flexible',
  },
]

function MyListings() {
  const navigate = useNavigate()
  const { user } = useUserContext()

  const activeButtonHandler = () => {
    console.log('active btn clicked')
  }
  const draftButtonHandler = () => {
    console.log('draft btn clicked')
  }
  const deactivatedButtonHandler = () => {
    console.log('deactivated btn clicked')
  }

  const createNewListing = () => {
    axios
      .post('http://localhost:8080/api/listings/create-new', {
        user_id: user && user.id,
        created_at: new Date().toISOString().slice(0, 19).replace('T', ' '),
      })
      .then((res) => {
        res.data.listingId &&
          navigate(`/create-listing/${res.data.listingId}/step/0`)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="container mb-10">
      <h3 className="font-semibold font-display mt-14">Active Listings</h3>
      <div className="flex flex-row items-center justify-between">
        {/* Tabs Left */}
        <div className="flex flex-row gap-4 mt-6">
          <Button
            size="small"
            border
            rounded="rounded-full"
            onClick={activeButtonHandler}
          >
            Active (24)
          </Button>
          <Button
            size="small"
            border
            rounded="rounded-full"
            onClick={draftButtonHandler}
          >
            Draft (0)
          </Button>
          <Button
            size="small"
            border
            rounded="rounded-full"
            onClick={deactivatedButtonHandler}
          >
            Deactivated (0)
          </Button>
        </div>
        {/* Btn create new listing right */}
        <Button
          iconPosition="right"
          color="primary"
          rounded="rounded-md"
          size="small"
          onClick={createNewListing}
          icon={<Plus size={16} color="#ffffff" />}
        >
          Create New Listing
        </Button>
      </div>
      {/* User's Listings */}
      <div className="flex flex-col mt-6 w-full">
        {data.map((listing) => (
          <div
            key={listing.id}
            className="flex flex-row gap-8 bg-neutral-50 p-8"
          >
            <div>
              <img
                src={listing.image}
                alt={listing.title}
                className={styles.card__image}
              />
            </div>
            <div className="flex flex-col gap-4 justify-start">
              <h6 className="font-medium">
                Room in Pembroke Court, Rahoon, Co. Galway
              </h6>
              <div className="flex flex-row flex-wrap gap-4">
                <span className="text-neutral-500">{listing.propertyType}</span>
                <span className="text-neutral-500">{listing.beds} Beds</span>
                <span className="text-neutral-500">{listing.baths} Baths</span>
                <span className="text-neutral-500">Bills Inc.</span>
              </div>
              <span className="text-base font-medium">€600 month</span>
              <div className="flex flex-row gap-2">
                <Eye size={24} color={COLORS.black} />
                <span>{listing.views} views</span>
              </div>
              <div>
                <Button
                  onClick={() => console.log('more action clicked')}
                  size="small"
                  color="secondary"
                  rounded="rounded-md"
                  iconPosition="right"
                  icon={<CaretDown size={16} color="#ffffff" />}
                >
                  More actions
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyListings
