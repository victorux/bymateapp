import CardButton from '../../../../common/Form/CardButton'
import { CodaLogo, Users, HouseLine } from '@phosphor-icons/react'
import styles from '../../Form.module.scss'
import useFormContext from '../../../../../hooks/useFormContext'

const SpaceType = () => {
  const { updateFormData, formData } = useFormContext()

  const handleClickPrivate = () => {
    updateFormData('spaceType', 'Private')
  }

  const handleClickShared = () => {
    updateFormData('spaceType', 'Shared')
  }

  const handleClickEntire = () => {
    updateFormData('spaceType', 'Entire')
  }

  return (
    <div className={styles.center}>
      <div className="container flex flex-col mt-16 items-center">
        <h5>What type of place will guests have?</h5>
        <div className="flex flex-col gap-4 mt-8">
          <CardButton
            onClick={handleClickPrivate}
            icon={<CodaLogo size={32} />}
            title="A private room"
            description="Guests have their own room in a home, plus access to shared spaces."
            selected={formData?.spaceType === 'Private'}
          />
          <CardButton
            onClick={handleClickShared}
            icon={<Users size={32} />}
            title="A shared room"
            description="Guests sleep in a room or common area that may be shared with you or others."
            selected={formData?.spaceType === 'Shared'}
          />
          <CardButton
            onClick={handleClickEntire}
            icon={<HouseLine size={32} />}
            title="An entire place"
            description="Guests have the whole place to themselves."
            selected={formData?.spaceType === 'Entire'}
          />
        </div>
      </div>
    </div>
  )
}

export default SpaceType
