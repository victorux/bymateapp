import styles from '../../Form.module.scss'
import CardButton from '../../../../common/Form/CardButton'
import {
  ApproximateEquals,
  Calendar,
  CalendarDots,
} from '@phosphor-icons/react'
import useFormContext from '../../../../../hooks/useFormContext'
import { FormData } from '../../../../../types/NewListings'

const Duration = () => {
  const { updateFormData, formData } = useFormContext()

  const handleClick = (value: FormData['duration']) => {
    updateFormData('duration', value)
  }

  return (
    <div className={styles.center}>
      <div className="container flex flex-col mt-16 items-center">
        <h5>Duration and available date</h5>
        <div className="flex flex-col gap-4 mt-8">
          <CardButton
            onClick={() => handleClick('flex')}
            icon={<ApproximateEquals size={32} />}
            title="Flexible"
            description="Keep the move-out date open for now."
            selected={formData?.duration === 'flex'}
          />
          <CardButton
            onClick={() => handleClick('fix')}
            icon={<CalendarDots size={32} />}
            title="Fixed"
            description="Only available between specific dates"
            selected={formData?.duration === 'fix'}
          />
          <CardButton
            onClick={() => handleClick('year')}
            icon={<Calendar size={32} />}
            title=" 12 Months"
            description="An annual commitment is required."
            selected={formData?.duration === 'year'}
          />
        </div>
      </div>
    </div>
  )
}

export default Duration
