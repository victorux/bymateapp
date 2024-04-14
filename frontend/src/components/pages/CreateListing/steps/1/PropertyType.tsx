import styles from '../../Form.module.scss'
import useFormContext from '../../../../../hooks/useFormContext'
import CustomRadioButton from '../../../../common/Form/CustomRadioButton'
import { HouseLine, Buildings } from '@phosphor-icons/react'
import FormFooter from '../../FormFooter'

const PropertyType = () => {
  const { updateFormData, formData } = useFormContext()

  const handleClick = (value: 'house' | 'apartment'): void => {
    updateFormData('propertyType', value)
  }

  const allowNextPage = () => {
    if (formData?.propertyType) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <div className={styles.center}>
        <div className="container flex flex-col w-full items-center">
          <h5>Which of these best describes your place?</h5>
          <div className="flex gap-4 mt-8 items-center">
            <CustomRadioButton
              title="House"
              icon={<HouseLine size={32} />}
              selected={formData?.propertyType === 'house'}
              onClick={() => handleClick('house')}
            />
            <CustomRadioButton
              title="Flat/Apartment"
              icon={<Buildings size={32} />}
              selected={formData?.propertyType === 'apartment'}
              onClick={() => handleClick('apartment')}
            />
          </div>
        </div>
      </div>
      <FormFooter canNextPage={allowNextPage()} />
    </>
  )
}

export default PropertyType
