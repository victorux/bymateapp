import CustomTextArea from '../../../../common/Form/CustomTextArea'
import styles from '../../Form.module.scss'
import useFormContext from '../../../../../hooks/useFormContext'
import FormFooter from '../../FormFooter'

const GiveDescription = () => {
  const { updateFormData, formData } = useFormContext()

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (formData) {
      updateFormData('description', e.target.value)
    }
  }

  const allowNextPage = () => {
    if ((formData?.description?.length ?? 0) > 4) {
      return true
    } else {
      return false
    }
  }
  return (
    <>
      <div className={styles.center}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Create your description</h3>
            <p className="text-lg font-normal text-neutral-500 mb-2">
              Share what makes your place special.
            </p>
            <CustomTextArea
              name="title"
              placeholder="Description goes here..."
              onChange={handleChange}
              value={formData?.description ?? ''}
              maxLength={500}
              cols={50}
              rows={7}
            />
          </div>
        </div>
      </div>
      <FormFooter canNextPage={allowNextPage()} />
    </>
  )
}

export default GiveDescription
