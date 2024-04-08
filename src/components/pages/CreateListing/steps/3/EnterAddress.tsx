import Input from '../../../../common/Form/Input'
import styles from '../../Form.module.scss'
import useFormContext from '../../../../../hooks/useFormContext'

const EnterAddress = () => {
  const { updateFormData, formData } = useFormContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formData) {
      updateFormData('address', {
        ...formData.address,
        [e.target.name]: e.target.value,
      })
    }
  }

  return (
    <div className={styles.center}>
      <div className="container flex flex-col mt-16 items-center">
        <h5 className="mb-8">Where's your place located?</h5>
        <div className="flex flex-col gap-4">
          <Input
            name="street"
            label="Street Address"
            onChange={handleChange}
            value={formData?.address.street ?? null}
          />
          <Input
            name="city"
            label="City/Town"
            onChange={handleChange}
            value={formData?.address.city ?? null}
          />
          <Input
            name="county"
            label="County"
            onChange={handleChange}
            value={formData?.address.county ?? null}
          />
          <Input
            name="eircode"
            label="Eircode"
            onChange={handleChange}
            value={formData?.address.eircode ?? null}
          />
        </div>
      </div>
    </div>
  )
}

export default EnterAddress
