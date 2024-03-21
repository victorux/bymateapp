import UserImg from '../../../assets/property/user.jpeg'
import { SealCheck, Check } from '@phosphor-icons/react'
import styles from './UserProfile.module.scss'
import { COLORS } from '../../../constants/colors'

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
        <div className="bg-secondary-200 col-span-3 self-start">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          autem architecto veniam illo deserunt sit officiis! Neque ullam nobis
          quasi minus rerum, odio esse quam aliquid maxime adipisci nostrum hic.
          Architecto voluptas iste libero sapiente, laudantium labore fuga nulla
          culpa recusandae voluptatum, dicta quidem totam non sint temporibus
          commodi sit nihil natus animi enim numquam. Eius ea sint facere
          voluptatibus?
        </div>
      </div>
    </div>
  )
}

export default UserProfile
