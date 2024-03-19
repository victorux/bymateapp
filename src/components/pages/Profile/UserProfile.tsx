import UserImg from '../../../assets/property/user.jpeg'
import { SealCheck } from '@phosphor-icons/react'
import styles from './UserProfile.module.scss'

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
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex gap-1">
                  <span className="font-semibold text-lg">Katty P.</span>
                  <SealCheck size={24} color="#258B73" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-normal text-neutral-500 text-base">
                    Age
                  </span>
                  <span className="font-semibold">25</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-normal text-neutral-500 text-base">
                    Joined
                  </span>
                  <span className="font-semibold">a month ago</span>
                </div>
              </div>
            </div>
          </div>
          <div>Verified profile widget</div>
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
