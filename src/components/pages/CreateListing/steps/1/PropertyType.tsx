import CustomRadioButton from '../../../../common/Form/CustomRadioButton'
import { HouseLine, Buildings } from '@phosphor-icons/react'
import styles from '../../Form.module.scss'
import useFormContext from '../../../../../hooks/useFormContext'

const PropertyType = () => {
  const { updateFormData, formData } = useFormContext()

  const handleClickHouse = () => {
    updateFormData('propertyType', 'House')
  }

  const handleClickApartment = () => {
    updateFormData('propertyType', 'Apartment')
  }

  return (
    <div className={styles.center}>
      <div className="container flex flex-col w-full items-center">
        <h5>Which of these best describes your place?</h5>
        <div className="flex gap-4 mt-8">
          <CustomRadioButton
            title="House"
            icon={<HouseLine size={32} />}
            selected={formData?.propertyType === 'House'}
            onClick={handleClickHouse}
          />
          <CustomRadioButton
            title="Flat/Apartment"
            icon={<Buildings size={32} />}
            selected={formData?.propertyType === 'Apartment'}
            onClick={handleClickApartment}
          />
        </div>
      </div>
    </div>
  )
}

export default PropertyType
