import CardButton from '../../../../common/Form/CardButton'
import { CodaLogo, Users, HouseLine } from '@phosphor-icons/react'
import styles from '../../Form.module.scss'

const SpaceType = () => {
  return (
    <div className={styles.center}>
      <div className="container flex flex-col mt-16 items-center">
        <h5>What type of place will guests have?</h5>
        <div className="flex flex-col gap-4 mt-8">
          <CardButton
            onClick={() => console.log('A room')}
            icon={<CodaLogo size={32} />}
            title="A Room"
            description="Guests have their own room in a home, plus access to shared spaces."
            selected={false}
          />
          <CardButton
            onClick={() => console.log('A room')}
            icon={<Users size={32} />}
            title="A Room"
            description="Guests have their own room in a home, plus access to shared spaces."
            selected={false}
          />
          <CardButton
            onClick={() => console.log('A room')}
            icon={<HouseLine size={32} />}
            title="A Room"
            description="Guests have their own room in a home, plus access to shared spaces."
            selected={false}
          />
        </div>
      </div>
    </div>
  )
}

export default SpaceType
