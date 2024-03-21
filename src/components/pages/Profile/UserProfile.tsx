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

function UserProfile() {
  return (
    <div className="container pt-10">
      <div className="grid grid-cols-4 gap-10 w-full">
        <div className="flex flex-col gap-10">
          <div className={styles.UserInfo__Container}>
            <div className="flex flex-row gap-4">
              <div
                className={styles.userImage}
                style={{ backgroundImage: `url(${UserImg})` }}
              />
              <div className="flex flex-col gap-4">
                <div className="flex gap-1">
                  <span className="font-semibold text-lg">Katty P.</span>
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
            <h6>Katty confirmed information</h6>
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
        <div className="col-span-3 self-start">
          <h2 className="font-semibold font-display mb-4">About Katty</h2>
          <Button
            border
            size="medium"
            onClick={() => console.log('edit btn was clicked!')}
          >
            Edit Profile
          </Button>
          <div className="grid grid-cols-2 mt-10 max-w-[640px] gap-4 items-start">
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
          <p className="mt-10 leading-7 max-w-[640px]">
            Hi I'm Katty and I'm looking to assign the lease of my pre-war
            studio on the UES (3-blocks from Central Park, Q-train right at the
            end of the street). Available date is between now and 2/1/24, and
            lease ends 6/30 with option to renew.
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
