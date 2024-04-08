import useFormContext from '../../../../../hooks/useFormContext'
import { FormData } from '../../../../../types/NewListings'

const Baths = () => {
  const { updateFormData, formData } = useFormContext()

  const handleIncerement = (objectKey: keyof FormData['baths']) => {
    updateFormData('baths', {
      ...formData?.baths,
      [objectKey]: Math.min((formData?.baths?.[objectKey] ?? 0) + 1, 10),
    } as FormData['baths'])
  }

  const handleDecrement = (objectKey: keyof FormData['baths']) => {
    updateFormData('baths', {
      ...formData?.baths,
      [objectKey]: Math.max((formData?.baths?.[objectKey] ?? 0) - 1, 0),
    } as FormData['baths'])
  }

  return (
    <div>
      <h1>What kind of bathrooms available to renter</h1>
      <div>
        <h6>Private and attached</h6>
        <p>It's connected to the guest's room and is just for them.</p>
      </div>
      <div>
        <button onClick={() => handleDecrement('private')}>-</button>
        {formData?.baths.private}
        <button onClick={() => handleIncerement('private')}>+</button>
      </div>
    </div>
  )
}

export default Baths
