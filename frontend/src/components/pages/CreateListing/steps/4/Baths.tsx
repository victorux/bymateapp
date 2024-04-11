import useFormContext from '../../../../../hooks/useFormContext'
import { FormData } from '../../../../../types/NewListings'
import styles from '../../Form.module.scss'
import Counter from './Counter'

const Baths = () => {
  const { updateFormData, formData } = useFormContext()

  const handleIncrement = (objectKey: keyof FormData['baths']) => {
    let value = formData?.baths?.[objectKey] ?? 0

    if (value < 10) {
      value++
      updateFormData('baths', {
        ...formData?.baths,
        [objectKey]: value,
      } as FormData['baths']) // Explicitly cast to FormData['baths']
    }
  }

  const handleDecrement = (objectKey: keyof FormData['baths']) => {
    let value = formData?.baths?.[objectKey] ?? 0
    if (value >= 1) {
      value--
      updateFormData('baths', {
        ...formData?.baths,
        [objectKey]: value,
      } as FormData['baths']) // Explicitly cast to FormData['baths']
    }
  }

  return (
    <div className={styles.center}>
      <div className="flex flex-col gap-6">
        <h5 className="">What kind of bathrooms available to renter</h5>
        <div className="flex flex-row items-center justify-between gap-10">
          <div>
            <h6 className="font-semibold">Private and attached</h6>
            <p className="text-base text-neutral-500 mt-2">
              It's connected to the guest's room and is just for them.
            </p>
          </div>
          <Counter
            counter={formData?.baths.private}
            onIncrement={() => handleIncrement('private')}
            onDecrement={() => handleDecrement('private')}
          />
        </div>

        <div className="w-full h-px bg-neutral-200" />

        <div className="flex flex-row items-center justify-between gap-10">
          <div>
            <h6 className="font-semibold">Dedicated</h6>
            <p className="text-base text-neutral-500 mt-2">
              It's private, but accessed via a shared space, such as a hallway.
            </p>
          </div>
          <Counter
            counter={formData?.baths.dedicated}
            onIncrement={() => handleIncrement('dedicated')}
            onDecrement={() => handleDecrement('dedicated')}
          />
        </div>

        <div className="w-full h-px bg-neutral-200" />

        <div className="flex flex-row items-center justify-between gap-10">
          <div>
            <h6 className="font-semibold">Shared</h6>
            <p className="text-base text-neutral-500 mt-2">
              It's shared with other people.
            </p>
          </div>
          <Counter
            counter={formData?.baths.shared}
            onIncrement={() => handleIncrement('shared')}
            onDecrement={() => handleDecrement('shared')}
          />
        </div>
      </div>
    </div>
  )
}

export default Baths
