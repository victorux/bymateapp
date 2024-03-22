import UserImg from '../../../assets/property/user.jpeg'
import {
  SealCheck,
  Check,
  Cake,
  MapPin,
  BagSimple,
  MusicNoteSimple,
} from '@phosphor-icons/react'
import styles from './UserProfile.module.scss'
import { COLORS } from '../../../constants/colors'
import Button from '../../common/Buttons/Button'
import ListingCard from '../../common/Card/ListingCard'
import { useNavigate } from 'react-router-dom'

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
]

function UserProfile() {
  const navigate = useNavigate()

  const manageListingHandler = () => {
    navigate('/my-listings')
  }
  return (
    <div className="container pt-10">
      <div className="grid grid-cols-4 gap-12 w-full">
        <div className="flex flex-col col-span-1 gap-10">
          <div className={styles.UserInfo__Container}>
            <div className="flex flex-row gap-4">
              <div
                className={styles.userImage}
                style={{ backgroundImage: `url(${UserImg})` }}
              />
              <div className="flex flex-col gap-4">
                <div className="flex gap-1">
                  <span className="font-semibold text-2xl">Katty P.</span>
                  <SealCheck size={24} color="#258B73" />
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="font-normal text-neutral-500 text-base">
                      Age
                    </span>
                    <span className="font-medium">25</span>
                  </div>
                  <div className="w-[1px] h-full bg-neutral-200"></div>
                  <div className="flex flex-col gap-1">
                    <span className="font-normal text-neutral-500 text-base">
                      Joined
                    </span>
                    <span className="font-medium">a month ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Verified Widget */}
          <div className="flex flex-col gap-4 p-6 border border-neutral-100 rounded-lg">
            <h5 className="font-display font-semibold ">
              Katty confirmed information
            </h5>
            <div className="flex gap-2 items-center">
              <Check size={16} color={COLORS.black} />
              <span>Identity</span>
            </div>
            <div className="flex gap-2 items-center">
              <Check size={16} color={COLORS.black} />
              <span>Email address</span>
            </div>
            <div className="flex gap-2 items-center">
              <Check size={16} color={COLORS.black} />
              <span>Phone number</span>
            </div>
          </div>
        </div>
        {/* BODY */}
        <div className="col-span-3 self-start">
          <h5 className="font-semibold font-display mb-4">About Katty</h5>
          <Button
            border
            size="small"
            onClick={() => console.log('edit btn was clicked!')}
          >
            Edit Profile
          </Button>
          <div className="grid grid-cols-2 mt-8 max-w-[640px] gap-4 items-start">
            <div className="flex gap-2 items-center">
              <Cake size={24} color={COLORS.black} />
              <span className="text-base">Born in 1999</span>
            </div>
            <div className="flex gap-2 items-center">
              <MapPin size={24} color={COLORS.black} />
              <span className="text-base">Lives in Limerick, Ireland</span>
            </div>

            <div className="flex gap-2 items-center">
              <BagSimple size={24} color={COLORS.black} />
              <span className="text-base">My work: To many to list</span>
            </div>
            <div className="flex gap-2 items-start">
              <MusicNoteSimple size={24} color={COLORS.black} />
              <span className="text-base">
                Favourite song: Mama we're all crazy now
              </span>
            </div>
          </div>
          <p className="mt-6 leading-7 max-w-[1024px]">
            Hi I'm Katty and I'm looking to assign the lease of my pre-war
            studio on the UES (3-blocks from Central Park, Q-train right at the
            end of the street). Available date is between now and 2/1/24, and
            lease ends 6/30 with option to renew.
          </p>
          {/* Separator */}
          <div className="w-full h-[1px] bg-neutral-200 my-10"></div>
          {/* User's listing section */}
          <h5 className="font-display font-semibold mb-6">Katty's listing</h5>
          <Button border size="small" onClick={manageListingHandler}>
            Manage Listing
          </Button>
          <div className="grid grid-cols-3 gap-10 my-10">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
