import { CaretRight, Heart, ShareFat, SealCheck } from '@phosphor-icons/react'
import { COLORS } from '../../../constants/colors'
import Button from '../../common/Buttons/Button'
import Thumbail1 from '../../../assets/property/image01.png'
import styles from './RoomDetails.module.scss'
import UserImg from '../../../assets/property/user.jpeg'

export default function RoomDetails() {
  return (
    <div className="container">
      <div className="flex justify-between bg-neutral-50 ">
        <div className="flex flex-row gap-1 text-xl items-center">
          <span>Galway</span>
          <CaretRight size={24} color={COLORS.black} />
          <span>Rahoon</span>
        </div>
        <div className="flex items-center gap-4 my-6">
          <Button
            onClick={() => console.log('Share Button clicked...')}
            icon={<ShareFat size={24} color={COLORS.black} />}
            iconPosition="left"
            border={true}
            rounded="rounded-full"
            size="small"
          >
            Share
          </Button>
          <Button
            onClick={() => console.log('Save Button clicked...')}
            icon={<Heart size={24} color={COLORS.black} />}
            iconPosition="left"
            border={true}
            rounded="rounded-full"
            size="small"
          >
            Save
          </Button>
        </div>
      </div>

      <div className="w-full grid grid-cols-4 grid-rows-2 gap-6 h-[640px] mb-10">
        <div
          className="rounded-md col-span-2 row-span-2 bg-cover bg-center"
          style={{ backgroundImage: `url(${Thumbail1})` }}
        />
        <div
          className="rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${Thumbail1})` }}
        />
        <div
          className="rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${Thumbail1})` }}
        />
        <div
          className="rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${Thumbail1})` }}
        />
        <div
          className="rounded-md bg-cover bg-center"
          style={{ backgroundImage: `url(${Thumbail1})` }}
        />
      </div>

      <div className="grid grid-cols-6 gap-10 w-full">
        <div className="col-span-4">
          {/* Property Title */}
          <h4 className="font-display font-medium">
            Room in Pembroke Court, Rahoon, Co. Galway
          </h4>
          {/* Property info tags */}
          <div className="flex items-center gap-4 my-6">
            <span>Apartment</span>
            <span>1 Bathroom</span>
            <span>2 Bedroom</span>
          </div>
          {/* Listing overview */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 bg-neutral-75 p-8 bg-opacity-30 rounded-xl mt-10 max-w-[840px]">
            <div className="grid grid-cols-3 gap-4 font-body">
              <span className="text-neutral-500 max-w-[240px]">Price</span>
              <span className="col-span-2 text-dark font-semibold text-xl">
                &#x20AC;1200/mo
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 font-body">
              <span className="text-neutral-500 max-w-[240px]">
                Available date
              </span>
              <span className="col-span-2 text-dark">Jan 11, 2024</span>
            </div>
            <div className="grid grid-cols-3 gap-4 font-body">
              <span className="text-neutral-500 max-w-[240px]">Deposit</span>
              <span className="col-span-2 text-dark">&#x20AC;800</span>
            </div>
            <div className="grid grid-cols-3 gap-4 font-body">
              <span className="text-neutral-500 max-w-[240px]">
                Listing Type
              </span>
              <span className="col-span-2 text-dark">Offering a room</span>
            </div>
            <div className="grid grid-cols-3 gap-4 font-body">
              <span className="text-neutral-500 max-w-[240px]">Bills</span>
              <span className="col-span-2 text-dark">Not Included</span>
            </div>
          </div>
          <div className="flex flex-col mt-10 gap-10">
            {/* Description */}
            <div>
              <h6 className="font-display font-semibold">Description</h6>
              <p className="max-w-[840px] font-body text-base leading-7 mt-4">
                My apartment, conveniently located in Dublin peaceful Upper East
                Side, offers access to Central Park, the Met, and O’Connel
                Museum. You'll have everything at your fingertips, with subway
                stations and shopping options nearby. Enjoy a spacious kitchen,
                bathtub, washer/dryer, and the convenience of the first-floor
                entry. Experience the best city living while enjoying a tranquil
                retreat in our well-situated apartment.
              </p>
            </div>
            <div className={styles.divider} />
            {/* Amenities */}
            <div>
              <h6 className="font-display font-semibold">Ammenities</h6>
              <div className="grid grid-cols-3 gap-6 mt-4">
                <span>Wifi</span>
                <span>Heating</span>
                <span>Washing Machine</span>
                <span>Dryer</span>
                <span>Iron</span>
                <span>TV</span>
                <span>Desk</span>
                <span>Chair</span>
                <span>Bed</span>
                <span>Wardrobe</span>
                <span>Window</span>
              </div>
            </div>
            <div className={styles.divider} />
            {/* Household & Lifestyle */}
            <div className="grid grid-cols-2 gap-14 w-full">
              <div>
                <h6 className="font-display font-semibold">Household</h6>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 w-full mt-4">
                    <span className="text-neutral-500">House hold age</span>
                    <span className="font-bold">18-99</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="text-neutral-500">
                      People in household
                    </span>
                    <span className="font-bold">2</span>
                  </div>
                </div>
              </div>
              <div>
                <h6 className="font-display font-semibold">Lifestyle</h6>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 mt-4 gap-y-10">
                    <span className="text-neutral-500">My Cleanliness</span>
                    <span className="font-bold">Average</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="text-neutral-500">Overnight Guests</span>
                    <span className="font-bold">Rarely</span>
                  </div>
                </div>
              </div>
              <div>
                <h6 className="font-display font-semibold">Housing Rules</h6>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-2 w-full mt-4">
                    <span className="text-neutral-500">Smoking</span>
                    <span className="font-bold">Not Allowed</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <span className="text-neutral-500">Pets</span>
                    <span className="font-bold">Allowed</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divider} />
            {/* Location */}
            <div className="mb-10">
              <h6 className="font-display font-semibold">Location</h6>
              here goes the map
            </div>
          </div>
        </div>
        <div className="self-start col-span-2 rounded-lg border border-neutral-100 p-6">
          <div className="flex flex-row gap-4">
            <div
              className={styles.userImage}
              style={{ backgroundImage: `url(${UserImg})` }}
            />
            <div className="flex flex-col gap-1 mb-8">
              <div className="flex gap-4">
                <span className="font-semibold text-lg">Katty P.</span>
                <span className="text-neutral-500">22 y.o.</span>
                <span className="text-neutral-500">Female</span>
              </div>
              <div className="flex gap-2 ">
                <SealCheck size={24} color="#258B73" />
                <span className="text-secondary-400">Identity verified</span>
              </div>
            </div>
          </div>
          <Button
            color="primary"
            onClick={() => console.log('message button was clicked...')}
          >
            Send Message
          </Button>
        </div>
      </div>
    </div>
  )
}
